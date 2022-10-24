import { ADD_REMINDER, ClEAR_ALL, REMOVE } from "../actionTypes";

// Here Is To Use The LocalStorage And It's Methods ==> *( bake-cookie ('item name' ,  item value) ---> To Save A Key Or Item With A Value ,, read-cookie('The Item Name Or Key') )* Ok.. All Of That Is After Calling The LocalStorage Liberary By Calling Or Installing It In The Termianl By ---> npm i --save sf-cookies
// طيب احنا بنعمل المكتبه بتاع اللوكال استوردج هنا ليه فى الريديوسر ؟ لان هو الى مسؤال عن التحكم فى الداتا الى بتتعرض فى الاستيت الى الكومبوننت (اينبوت الى هو تشيلد كومبوننت بياخدها ك بروبس ليه و يعرضها) علشان كدا احنا كان لازم نستدعى اللوكال استوردج هنا علشان مع كل تعديل نعدل عليها او على الاوبجيكت او الايتم او الكى الى جواها و كمان الاستيت فى الديفلت بتاعها تقرء من اللوكال استوردج بالميسود ( ريد_كوكى("اسم الكى") ) و معى كل تعديل على الاستيت بيتم التعديل ف اللوكال استوردج ب ( بيك_كوكى("اسم الكى الى مستخدمه عند كل تعديل" و الفاليو الى عايز تضيفها جديده للكى دا) ).. كدا تمام الحمد لله حمداً كثيراً مباركاً فيه 
import { bake_cookie, read_cookie } from "sfcookies";

const reducer = (state = [], action) => {

    let reminder = [];

    // state = read_cookie('remiders');

    if (action.type === ADD_REMINDER) {

        reminder = [...state, { text: action.text, data: action.data, id: Math.floor(Math.random() * 1000) }];

        bake_cookie('remiders', reminder);

        return reminder;

    } else if (action.type === ClEAR_ALL) {

        bake_cookie('remiders', reminder);
        return reminder;

    } else if (action.type === REMOVE) {

        reminder = state.filter((el) => {
            return el.id !== action.id
        })

        bake_cookie('remiders', reminder);
        return reminder;

    } else {
        return state
    }

}

export default reducer;