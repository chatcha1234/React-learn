import { useState } from "react";
import boy from "../assets/boy.svg"
import girl from "../assets/girl.svg"

const PersonList = () => {
    const [data, setData] = useState([
        { id: 1, name: "ก้อง", gender: "ชาย" },
        { id: 2, name: "น้ำ", gender: "หญิง" },
        { id: 3, name: "โจ้", gender: "ชาย" },
    ]);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>จำนวนประชากร {data.length} คน </h1>
            <button style={{ borderRadius: "10px" }} onClick={() => setShow(!show)}>
                {show ? "ซ่อน" : "แสดง"}
            </button>
            <ul>
                {show &&
                    data.map((item) => (
                        <li key={item.id}> <img src={boy} width={50} height={50} />
                            <h3>
                                {item.id}|{item.name}|{item.gender}
                            </h3>
                        </li>
                    ))}
            </ul>
        </>
    );
};
export default PersonList;
