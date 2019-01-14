import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReferenceArrayField, SelectField, SingleFieldList, ChipField, Create, SimpleForm,
     ReferenceInput, SelectInput, TextInput, DisabledInput, LongTextInput,
     ReferenceArrayInput, SelectArrayInput } from 'react-admin';

class AdminCreate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Create title="ثبت ادمین" {...this.props}>
            <SimpleForm>
                <TextInput label="نام" source="firstname" />
                <TextInput label="نام خانوادگی" source="lastname" />
                <TextInput label="شماره موبایل" source="mobile" />
                <TextInput label="نام کاربری" source="username" />
                <TextInput label="رمز عبور" source="password" type="password" />

                <SelectInput label="وضعیت" source="status" choices={[
                    { key: '1', id: 'active', name: 'فعال' },
                    { key: '0', id: 'inactive', name: 'غیرفعال' },
                ]} />

                {/* <ReferenceArrayInput label="نقش ها و سطوح دسترسی" source="roles" reference="role">
                    <SelectArrayInput optionText="title" />
                </ReferenceArrayInput> */}
            </SimpleForm>
        </Create>
    }
}

AdminCreate.propTypes = {
    classes: PropTypes.object.isRequired
};

export default AdminCreate;