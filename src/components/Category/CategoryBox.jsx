import React from "react";
import "./CategoryBox.css"

export default function CategoryBox({
    icon: Icon,
    label,
    selectedCategory,
    setSelectedCategory
}) {
    const handleClick = () => {
        setSelectedCategory(label);
    }

    return (
        <div 
            // style={{
            //     display:'flex', flexDirection:'column', gap:'8px', alignItems:'center',
            //     justifyContent:'center', padding:'12px', cursor:'pointer', transition:'all',
            //     marginRight:'32px'
            // }}
            className={`category_box ${selectedCategory === label && 'selected'}`}
            onClick={handleClick}
        >
            <Icon size={28} />
            <div className="label">
                {label}
            </div>
        </div>
    )
}
