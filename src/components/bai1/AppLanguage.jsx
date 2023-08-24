import React, { useContext } from 'react'
import { exLangueContext } from './LanguageContext'

function AppLanguage() {

    // kế thừa Context của cha và logic in ra dữ liệu
    const language = useContext(exLangueContext);
    const getContent = () => {
        switch (language.defaultLanguage) {
            case 'en':
                return 'I love IT!';
            case 'vn':
                return 'Tôi yêu công nghệ thông tin!';
            default:
                return 'Xin Chào';
        }
    };
    return (
        <div>
            <div>
                <hr />
                <p>{getContent()}</p>
            </div>

        </div>
    )
}

export default AppLanguage  