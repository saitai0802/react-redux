import React, { Component } from "react";

// Field: React Component know how to communicate with reduxForm, save the time to createPost
//        event handler and action creator etc...
// reduxForm: Connect helper just like react-redux.connect
// It is a connect helper like react-redux.connect that connect our imported formReducer in /reducer/index.js
import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) { // component會將field 既props 掉哂入黎。

    // Version 1: `form-group ${field.meta.touched && field.meta.error ? "has-danger" : ""}`;
    // Version 2: const { meta } = field;
    //  `form-group ${meta.touched && meta.error ? "has-danger" : ""}`;

    // touched is a state of field.
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;


  // {...field.input}, weird syntax.. get all the props from field.input to input html tag
  // In that way, we don't needa do write down all the event again!
  // onChange = field.input.onChange
  // onFocus = field.input.onFocus
  // onBlur= field.input.onBlur
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this===component
    // 由於Route component Gen 尼個component 所以我地拎到route既history
    console.log(values) // Object {title: "A", categories: "B", content: "C"}
    this.props.createPost(values, () => {
      this.props.history.push("/"); // callback function, "/" = root route
    });
  }

  render() {
    // 尼句past handleSubmit入黎，export default reduxForm()
    // if it past our validation, then it will call our handleSubmit()
    const { handleSubmit } = this.props;

// handleSubmit(this.onSubmit.bind(this)), We pass this to bind function because,
// we are passing this.onSubmit as a callback function, and that function we needa use "this" keyword.
// To make sue this===component in onSubmit()
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField} // this props use to define what kind of input filed it is.
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// It will call automatically during the reduxForm life cycle, it will give us a para call values.
function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

/*
如果係第2到，有一個同名既form(PostsNewForm)，禁佢地就會共用左同一個state. So, 記得要用unique 名!!!
如果你做有Step1,2,3 既Wirad form 就可以試下同一個名。
*/
// Version 1: export default PostsNew;
// Version 2: export default reduxForm({form: "PostsNewForm"})(PostsNew);
// Version 3: combine reduxForm() and connect()
// reduxForm will handle the state of our form, like value and valiation on it
// react-redux.connect and redux-form.reduxForm are also connect helper, they do the similiar stuff
// 有D似 CMS hook 個concept
export default reduxForm({
  validate,
  form: "PostsNewForm"
})
(connect(null, { createPost })
(PostsNew)
);
// para 1: connect function, para 2: connecting Class - createPost
