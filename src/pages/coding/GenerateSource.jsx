import React, { useState } from 'react';
import PropertiesTable from './PropertiesTable';
import { FormProvider, useForm } from 'react-hook-form';
import EntityTable from './EntityTable';
import { ClRequest } from '../../common/axios';
export const Generate = ({ setOutput }) => {
    const [className, setClassName] = useState();
    const methods = useForm({
        defaultValues: {
            listProperties: [
                {
                    javaName: '',
                    columnName: '',
                    isId: false,
                    dataType: 'String',
                    sqlType: 'nvarchar',
                    validation: [],
                    regex: '',
                },
            ],
            listRelation: [
                {
                    entityA: className,
                    javaNameA: '',
                    relationship: '',
                    entityB: '',
                    javaNameB: '',
                },
            ],
        },
    });
    const { handleSubmit, register, reset } = methods;

    const onSubmit = (values) => {
        console.log('values::', values);
        setOutput(values)
        ClRequest('POST', 'http://localhost:8080/coding/generation', values).then((res) => {
            setOutput(res.data);
        });
    };

    const handleReset = () => {
        reset({
            listProperties: [
                {
                    javaName: '',
                    columnName: '',
                    isId: false,
                    dataType: 'String',
                    sqlType: 'nvarchar',
                    validation: [],
                    regex: '',
                },
            ],
            listRelation: [
                {
                    entityA: className,
                    javaNameA: '',
                    relationship: '1-n',
                    entityB: '',
                    javaNameB: '',
                },
            ],
        });
    };

    return (
        <FormProvider {...methods}>
            <div className="d-flex col-12 my-2 flex-column">
                <div className="package col-11 my-1">
                    <input
                        className="form-control form-control-sm col-11"
                        type="text"
                        // name="packageName"
                        placeholder="Package Name (ex: fu.com.entity)"
                        {...register('packageName', { required: true })}
                    />
                </div>
                <div className="classname col-11 my-1">
                    <input
                        className="form-control form-control-sm col-11"
                        type="text"
                        placeholder="Class Name (ex: Student)"
                        {...register('className', { required: true })}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </div>

                <div className="properties my-1">
                    <div className="w-100 ">
                        <PropertiesTable />
                    </div>
                </div>

                <div className="relation my-1">
                    <div className="w-100 ">
                        <EntityTable value={className} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-end">
                        <button className="col-1 btn btn-sm clear mx-1 text-white" onClick={handleReset}>
                            Reset
                        </button>
                        <button className="col-1 btn btn-sm gen text-white" onClick={handleSubmit(onSubmit)}>
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};

export default Generate;
