import React, { useContext } from 'react'
import { exLangueContext } from './LanguageContext'

function AppLanguage() {

    // kế thừa Context của cha và logic in ra dữ liệu
    const language = useContext(exLangueContext);
    return (
        <div>
            <div>
                <hr />
                <p>{language.defaultLanguage === 'en' ? 'I love IT!' : language.defaultLanguage === 'vn' ? 'Tôi yêu công nghệ thông tin !' : 'Xin Chào'}</p>
            </div>

        </div>
    )
}

export default AppLanguage  