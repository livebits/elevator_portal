import React from 'react';
import { ReferenceArrayField, UrlField, ReferenceField, SelectInput, FileField, SimpleForm,
    TextInput, NumberInput, Datagrid, DisabledInput, TextField,
     FunctionField, EditButton, Edit, ReferenceManyField, DeleteButton } from 'react-admin';
import { Button, IconButton } from '@material-ui/core';
import {Link, withRouter} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';

let factorId = 0;

const Title = ({ record }) => {
    factorId = record.id;
    return <span>ویراش فاکتور {record ? `"${record.id}"` : ''}</span>;
};

export const FactorEdit = props => (
    <Edit title={<Title />} {...props}>
        <SimpleForm >
            <DisabledInput label="کد" source="id" />
            <ReferenceField label="خرابی" source="damageId" reference="Damages">
                <FunctionField source="id" render={record => `${record.id}`} />
            </ReferenceField>
            <SelectInput source="status" label="وضعیت" choices={[
                { id: 'paid', name: 'پرداخت شده' },
                { id: 'notpaid', name: 'پرداخت نشده' }
            ]} />

            <SelectInput source="paymentStatus" label="روش پرداخت" choices={[
                { id: 'online', name: 'آنلاین' },
                { id: 'cash', name: 'نقدی' }
            ]} />
            <NumberInput label="جمع کل" source="sumPrice" />

            <FunctionField source="id" label="" render={record => {
                return (
                    <Tooltip title="ثبت مورد جدید">
                        <Button component={Link}
                                    to={`/FactorItems/create/${factorId}`}
                                    color="primary"  size="medium"
                                    aria-label="ثبت مورد جدید">
                            <AddIcon/>
                            ثبت مورد جدید
                        </Button>
                    </Tooltip>
                );
            }} />
            <ReferenceManyField
                label="موارد فاکتور"
                reference="FactorItems"
                target="factorId"
                fullWidth
            >
                <Datagrid>
                    <TextField label="نام" source="name" />
                    <TextField label="تعداد" source="quantity" />
                    <TextField label="قیمت واحد" source="unitPrice" />
                    <TextField label="قیمت کل" source="total" />

                    <EditButton />
                    <DeleteButton redirect={`/Factors/${factorId}`} />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);