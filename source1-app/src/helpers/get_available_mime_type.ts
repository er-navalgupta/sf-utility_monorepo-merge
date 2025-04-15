import { MIME_TYPE } from "../enums";

const jsonMimeType = [MIME_TYPE.Json, MIME_TYPE.Xml];
const textMimeType = [MIME_TYPE.Text, MIME_TYPE.Html, MIME_TYPE.Js,
MIME_TYPE.Css, MIME_TYPE.Rtf, MIME_TYPE.Csv];

export const getAvailableMimeTypes = (type: MIME_TYPE) => {
    switch (type) {
        case MIME_TYPE.Json:
        case MIME_TYPE.Xml:
            return jsonMimeType;
        case MIME_TYPE.Html:
        case MIME_TYPE.Css:
        case MIME_TYPE.Csv:
        case MIME_TYPE.Js:
        case MIME_TYPE.Rtf:
        case MIME_TYPE.Text:
            return textMimeType;
    }
}