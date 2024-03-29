import React from 'react';
import { Field } from 'redux-form';
import cn from 'classnames';

import styles from './FormControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={cn(styles.formControl, { [styles.error]: hasError })}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError ? <span>{meta.error}</span> : ''}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={cn(styles.formControl, { [styles.error]: hasError })}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError ? <span>{meta.error}</span> : ''}
    </div>
  );
};
export const createField = (
  placeholder,
  name,
  component,
  validators,
  props = {}
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    ></Field>
  </div>
);
