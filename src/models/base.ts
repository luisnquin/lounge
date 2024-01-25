export interface Page {
    /**
     * @description The name of the page.
     */
    name: string
    /**
     * @description The url of the page.
     */
    url?: string
    /**
     * @description More pages that belong to this page.
     */
    pages?: Page[]
}

export interface Group {
    /**
     * @description The name of the group.
     */
    name: string
    icon: string
    /**
     * @description Pages that belong to the current group.
     */
    pages: Page[]
}
