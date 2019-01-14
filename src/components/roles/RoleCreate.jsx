import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput, NumberInput } from 'react-admin';

export const RoleCreate = props => (
    <Create {...props} title="ثبت نقش جدید">
        <SimpleForm>
            <TextInput label="نام" source="name" />
            <TextInput label="توضیحات" source="description" />
        </SimpleForm>
    </Create>
);