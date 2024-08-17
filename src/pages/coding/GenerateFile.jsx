import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TableGenerateResult from './ResultModal';
import Button from '@mui/material/Button';
const res = [
    {
        className: 'Student',
        body: `package fpt;

        import javax.persistence.*;
        import javax.validation.constraints.*;
        import java.util.*;
        import lombok.*;

        @Entity
        @Table(name = "STUDENT")
        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        public class Student{

            @Column(name = "Name",columnDefinition = "nvarchar",unique = false,nullable = true)
            @Pattern(regex = "123",message = "Invalid ...")
            private String name;

            @OneToMany(mappedBy = "a",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
            private List<ko> kkk;
        }`,
    },
    {
        className: 'Score',
        body: `package fpt;

        import javax.persistence.*;
        import javax.validation.constraints.*;
        import java.util.*;
        import lombok.*;

        @Entity
        @Table(name = "STUDENT")
        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        public class Student{

            @Column(name = "Name",columnDefinition = "nvarchar",unique = false,nullable = true)
            @Pattern(regex = "123",message = "Invalid ...")
            private String name;

            @OneToMany(mappedBy = "a",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
            private List<ko> kkk;
        }`,
    },
];
const GenerateFile = () => {
    const [inputKey, setInputKey] = useState(0);

    const [inputValue, setInputValue] = useState('');

    const handleClear = () => {
        setInputKey((prevKey) => prevKey + 1);
        setInputValue('');
    };
    const handleGenerate = () => {
        console.log(inputValue);
    };

    var plusOne = function (digits) {
        let total = '';
        for (let index = 0; index < digits.length; index++) {
            total = total + digits[index];
        }
        console.log(total);
        total = Number(total) + 1;
        console.log(total);
        return total.toString().split('');
    };
    const nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
    console.log(plusOne(nums, 8));

    return (
        <div className="generate-file-container">
            <div className="upload-container">
                <div className="d-flex flex-column position-relative justify-contents-center gap-2 ">
                    <label htmlFor="file">
                        <h1>SELECT AN XML FILE </h1>
                    </label>
                    <input
                        key={inputKey}
                        className="form-control pe-5"
                        type="file"
                        name="file"
                        id="file"
                        accept=".xml,.doc"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className={`clear-icon ${inputValue !== '' ? `show` : null}`} onClick={handleClear}>
                        <ClearIcon />
                    </button>
                    <Button
                        variant="contained"
                        disabled={inputValue === '' ? true : false}
                        onClick={handleGenerate}
                        startIcon={<UploadFileIcon />}
                    >
                        Generate
                    </Button>
                </div>
            </div>
            <div className="generate-result">
                {res.map((item) => (
                    <TableGenerateResult className={item.className} value={item.body} key={item.className} />
                ))}
            </div>
        </div>
    );
};

export default GenerateFile;
