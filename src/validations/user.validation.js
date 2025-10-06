"use strict";
import joi from "joi";

export const userBodyValidation = joi.object({
    email: joi.string().email().required()
    .messages({
        "string.required": "El correo electrónico es obligatorio",
        "string.empty": "El correo electrónico no puede estar vacío",
        "string.email": "El correo electrónico debe ser válido"})
    ,
    password: joi.string().required().min(6).max(30).pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .messages({
        "string.required": "La contraseña es obligatoria",
        "string.empty": "La contraseña no puede estar vacía",
        "string.min": "La contraseña debe tener al menos 6 caracteres",
        "string.max": "La contraseña no puede tener más de 30 caracteres",
        "string.pattern.base": "La contraseña debe contener al menos una letra y un número"})
});