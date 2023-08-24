import React, { createContext, useState } from 'react'
import LanguageSelector from './LanguageSelector'
import AppLanguage from './AppLanguage';

// Tạo Context và export
export const exLangueContext = createContext();

function LanguageContext() {
    
    // Mặc định là tiếng Anh được lưu vào state
    const [defaultLanguage, setDefaultLanguage] = useState("en")
    return (
        <div>
            <exLangueContext.Provider value={{ defaultLanguage, setDefaultLanguage }}>
                <LanguageSelector />
                <AppLanguage />
            </exLangueContext.Provider>
        </div>
    )
}

export default LanguageContext;