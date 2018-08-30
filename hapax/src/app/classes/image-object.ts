export class ImageObject {
    public id : number = 0;
    public titleText : string = '';
    public tooltipText : string = '';
    public imgSrc : string = '';
    public altText : string = '';

    constructor(
        id : number,
        titleText : string,
        tooltipText : string,
        imgSrc : string,
        altText : string
    ) {
        this.id = id;
        this.titleText = titleText;
        this.tooltipText = tooltipText;
        this.imgSrc = imgSrc;
        this.altText = altText;
    }
}
