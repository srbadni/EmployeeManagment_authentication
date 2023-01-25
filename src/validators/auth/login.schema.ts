import joi from 'joi';

const loginSchema = joi.object({
    username: joi.string().required().min(4).messages({
        "string.min": "نام کاربری حتما باید 4 حرف داشته باشد",
        "string.empty": "نام کاربری الزامی میباشد"
    }),
    password: joi.string()
        .required()
        // .regex(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])"))
        .messages({
            "string.min": "رمز عبور حتما باید 6 حرف داشته باشد",
            "string.empty": "رمز عبور الزامی میباشد",
            "string.pattern.base": "رمز عبور باید حداقل شامل یک حرف بزرگ و کوچک و عدد باشد"
        }),
})

const loginSchemaInitialValues = {
    username: "",
    password: ""
};

const EditLoginSchemaInitialValues = {
    username: "",
    password: ""
};

export {loginSchema, loginSchemaInitialValues, EditLoginSchemaInitialValues}