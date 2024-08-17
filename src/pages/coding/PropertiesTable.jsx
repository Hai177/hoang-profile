import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { ClickAwayListener } from '@mui/base';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import Header from './PropertiesHeader';

const validationOption = [
    'NotNull',
    'NotBlank',
    'NotEmpty',
    'Email',
    'Size',
    'Length',
    'Max',
    'Min',
    'Range',
    'Future',
    'Past',
    'PastOrPresent',
    'FutureOrPresent',
];
const dataTypeOptions = ['string', 'int', 'float', 'double', 'boolean', 'byte', 'short', 'long', 'localDate', 'date'];
const sqlTypeOptions = [
    'money',
    'text',
    'varchar',
    'nvarchar',
    'string',
    'int',
    'float',
    'binary',
    'char',
    'image',
    'timestamp',
    'time',
    'datetime',
    'date',
];

const PropertiesTable = () => {
    const [open, setOpen] = useState({ 0: false });
    const { register, control } = useFormContext();
    const { fields, remove, append } = useFieldArray({
        control,
        name: 'listProperties',
    });

    const handleAddRow = () => {
        append({
            javaName: '',
            columnName: '',
            isId: false,
            dataType: 'String',
            sqlType: 'nvarchar',
            validation: [],
            regex: '',
            
        });
    };

    return (
        <>
            <div className="col-12 d-flex ">
                <h5 className="col-10 text-white">Properties</h5>
                <div className="col-2 d-flex justify-content-end">
                    <button className="col-6 btn btn-sm gen text-white" onClick={handleAddRow}>
                        <AddIcon />
                    </button>
                </div>
            </div>
            <div className="table my-2">
                <Header />
                {fields.map((field, index) => (
                    <div key={field.id} className="form-row">
                        <form className="d-flex flex-row col-12 ">
                            <section className="col-2">
                                <input
                                    type="text"
                                    placeholder="nameStudent"
                                    className="  form-control-sm form-control"
                                    {...register(`listProperties.${index}.javaName`)}
                                />
                            </section>
                            <section className="col-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="form-control-sm form-control"
                                    {...register(`listProperties.${index}.columnName`)}
                                />
                            </section>
                            <section className="col-1 text-center">
                                <input
                                    type="checkbox"
                                    {...register(`listProperties.${index}.isId`)}
                                    className="form-check-input col-1"
                                />
                            </section>
                            <section className="col-1">
                                <select
                                    className=" form-select-sm form-select text-center"
                                    {...register(`listProperties.${index}.dataType`)}
                                >
                                    {dataTypeOptions.map((option) => (
                                        <option value={option} key={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </section>
                            <section className="col-2">
                                <select
                                    className=" form-select-sm form-select text-center"
                                    {...register(`listProperties.${index}.sqlType`)}
                                >
                                    {sqlTypeOptions.map((option) => (
                                        <option value={option} key={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </section>
                            <ClickAwayListener
                                onClickAway={() => setOpen((prev) => ({ ...prev, [index]: false }))}
                                className="col-2 "
                            >
                                <Box className=" validation col-2">
                                    <button
                                        type="button"
                                        className="form-select form-select-sm  "
                                        onClick={() => setOpen((prev) => ({ ...prev, [index]: true }))}
                                    >
                                        Validation
                                    </button>
                                    {open[index] ? (
                                        <Box className="validation-option">
                                            {validationOption.map((option) => (
                                                <div key={option} className="d-flex ">
                                                    <input
                                                        type="checkbox"
                                                        value={option}
                                                        className="form-check-input"
                                                        {...register(`listProperties.${index}.validation`)}
                                                    />
                                                    <p>{option}</p>
                                                </div>
                                            ))}
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                            <section className="col-2">
                                <input
                                    type="text"
                                    placeholder="/[0-9]{7}$/"
                                    className="form-control form-control-sm "
                                    {...register(`listProperties.${index}.regex`)}
                                />
                            </section>
                        </form>
                        <button className="del-btn" onClick={() => remove(index)}>
                            -
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PropertiesTable;
