import { getItems } from "$lib/database/database";

export function load() {
    return {
        einkaufsliste: getItems()  
    };
}
