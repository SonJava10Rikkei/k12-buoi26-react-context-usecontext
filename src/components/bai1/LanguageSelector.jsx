import React, { useContext } from 'react'
import { exLangueContext } from './LanguageContext';

function LanguageSelector() {
    
    // dùng useContext kế thừa context của cha 
    const useLanguage = useContext(exLangueContext);

    // hàm để set lại useState của cha khi onChange
    const handleLanguageChange = (e) => {
        useLanguage.setDefaultLanguage(e.target.value);
    }

    return (
        <div>
            <label>Select Language: </label>
            <select
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="vn">Tiếng việt</option>
            </select>
        </div>
    )
}

export default LanguageSelector