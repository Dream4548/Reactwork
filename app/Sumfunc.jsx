import React, { useState } from "react";

export const Fatname = () => {
    return (
        <div>
            นาย A
        </div>
    );
};

export const Motname = () => {
    return (
        <div>
            นาง B
        </div>
    );
};

export const Age = ({ age, year }) => {
    return (
        <div>
            อายุ: {age} <br />
            พ.ศ.: {year}
        </div>
    );
};

export const TestCount = () => {
    const [count, setCount] = useState(0);
    const Inc = () => setCount(count + 1);
    const Del = () => setCount(count - 1);

    return (
        <div>
            Count: {count} <br />
            <button onClick={Inc}>เพิ่ม</button> {/* แก้จาก Botton เป็น button */}
            <button onClick={Del}>ลด</button> {/* แก้จาก Botton เป็น button */}
        </div>
    );
};
