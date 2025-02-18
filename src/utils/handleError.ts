import { TError } from "./types"

export const handleError = (e : TError) => {
    return JSON.stringify(e)
}