import validator from "validator";

export default class kittenIntegrityValidator
{
    constructor()
    {
        this.val = validator;
        this.status = {
            ok: 200,
            created: 201,
            noContent: 204,
            badRequest: 400,
            unauthorized: 401,
            forbidden: 403,
            notFound: 404,
            methodNotAllowed: 405,
            internalServerError: 500,
        }
    }

    getStatus()
    {
        return this.status;
    }

    checkId(id)
    {
        let error = false;
        if(!this.val.isAlphanumeric(id) || id.length !== 24)
            error = true;

        return error;
    }

    checkString(stringArray)
    {
        let error = false;

        stringArray.forEach(el =>
        {
            if(!this.val.isAlpha(el))
                error = true;
        });

        return error;
    }
}