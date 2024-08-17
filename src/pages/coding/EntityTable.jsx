import React from 'react';
import EntityHeader from './EntityHeader';
import { useFieldArray, useFormContext } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';

const EntityTable = ({ value }) => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'listRelation',
    });
    const handleAddRow = () => {
        append({
            entityA: value,
            javaNameA: '',
            relation: '',
            entityB: '',
            javaNameB: '',
        });
    };
    console.log(errors);
    return (
        <>
            <div className="col-12 d-flex ">
                <h5 className="col-10 text-white">relation</h5>
                <div className="col-2 d-flex justify-content-end">
                    <button className="col-6 btn btn-sm gen text-white" onClick={handleAddRow}>
                        <AddIcon />
                    </button>
                </div>
            </div>
            <div className="table my-2">
                <EntityHeader />
                {fields.map((field, index) => (
                    <div className="form-row " key={field.id}>
                        <form className="d-flex flex-row col-12">
                            <section className="col-2">
                                <input
                                    value={value}
                                    disabled
                                    type="text"
                                    placeholder="Student"
                                    className="form-control form-control-sm"
                                    {...register(`listRelation.${index}.entityA`)}
                                />
                            </section>
                            <section className="col-3">
                                <input
                                    type="text"
                                    placeholder="student"
                                    className="form-control form-control-sm"
                                    {...register(`listRelation.${index}.javaNameA`, {
                                        required: 'required',
                                    })}
                                />
                            </section>
                            <section className="col-2">
                                <select
                                    className="form-select form-select-sm"
                                    aria-label="Small select example"
                                    {...register(`listRelation.${index}.relation`)}
                                >
                                    <option value="1">1 - n</option>
                                    <option value="2">n - 1</option>
                                    <option value="3">n - n</option>
                                    <option value="4">1 - 1</option>
                                </select>
                            </section>
                            <section className="col-2">
                                <input
                                    type="text"
                                    placeholder="Score"
                                    className="form-control form-control-sm"
                                    {...register(`listRelation.${index}.entityB`)}
                                />
                            </section>
                            <section className="col-3">
                                <input
                                    type="text"
                                    placeholder="listScore"
                                    className="form-control form-control-sm"
                                    {...register(`listRelation.${index}.javaNameB`)}
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

export default EntityTable;
