export var AssetOrder;
(function (AssetOrder) {
    AssetOrder["ContentTypeAsc"] = "contentType_ASC";
    AssetOrder["ContentTypeDesc"] = "contentType_DESC";
    AssetOrder["FileNameAsc"] = "fileName_ASC";
    AssetOrder["FileNameDesc"] = "fileName_DESC";
    AssetOrder["HeightAsc"] = "height_ASC";
    AssetOrder["HeightDesc"] = "height_DESC";
    AssetOrder["SizeAsc"] = "size_ASC";
    AssetOrder["SizeDesc"] = "size_DESC";
    AssetOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    AssetOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    AssetOrder["SysIdAsc"] = "sys_id_ASC";
    AssetOrder["SysIdDesc"] = "sys_id_DESC";
    AssetOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    AssetOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    AssetOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    AssetOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    AssetOrder["UrlAsc"] = "url_ASC";
    AssetOrder["UrlDesc"] = "url_DESC";
    AssetOrder["WidthAsc"] = "width_ASC";
    AssetOrder["WidthDesc"] = "width_DESC";
})(AssetOrder || (AssetOrder = {}));
export var EntryOrder;
(function (EntryOrder) {
    EntryOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    EntryOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    EntryOrder["SysIdAsc"] = "sys_id_ASC";
    EntryOrder["SysIdDesc"] = "sys_id_DESC";
    EntryOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    EntryOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    EntryOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    EntryOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
})(EntryOrder || (EntryOrder = {}));
export var ImageFormat;
(function (ImageFormat) {
    /** AVIF image format. */
    ImageFormat["Avif"] = "AVIF";
    /** JPG image format. */
    ImageFormat["Jpg"] = "JPG";
    /**
     * Progressive JPG format stores multiple passes of an image in progressively higher detail.
     *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
     *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
     *         early as possible to make the layout look as designed.
     */
    ImageFormat["JpgProgressive"] = "JPG_PROGRESSIVE";
    /** PNG image format */
    ImageFormat["Png"] = "PNG";
    /**
     * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
     *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
     */
    ImageFormat["Png8"] = "PNG8";
    /** WebP image format. */
    ImageFormat["Webp"] = "WEBP";
})(ImageFormat || (ImageFormat = {}));
export var ImageResizeFocus;
(function (ImageResizeFocus) {
    /** Focus the resizing on the bottom. */
    ImageResizeFocus["Bottom"] = "BOTTOM";
    /** Focus the resizing on the bottom left. */
    ImageResizeFocus["BottomLeft"] = "BOTTOM_LEFT";
    /** Focus the resizing on the bottom right. */
    ImageResizeFocus["BottomRight"] = "BOTTOM_RIGHT";
    /** Focus the resizing on the center. */
    ImageResizeFocus["Center"] = "CENTER";
    /** Focus the resizing on the largest face. */
    ImageResizeFocus["Face"] = "FACE";
    /** Focus the resizing on the area containing all the faces. */
    ImageResizeFocus["Faces"] = "FACES";
    /** Focus the resizing on the left. */
    ImageResizeFocus["Left"] = "LEFT";
    /** Focus the resizing on the right. */
    ImageResizeFocus["Right"] = "RIGHT";
    /** Focus the resizing on the top. */
    ImageResizeFocus["Top"] = "TOP";
    /** Focus the resizing on the top left. */
    ImageResizeFocus["TopLeft"] = "TOP_LEFT";
    /** Focus the resizing on the top right. */
    ImageResizeFocus["TopRight"] = "TOP_RIGHT";
})(ImageResizeFocus || (ImageResizeFocus = {}));
export var ImageResizeStrategy;
(function (ImageResizeStrategy) {
    /** Crops a part of the original image to fit into the specified dimensions. */
    ImageResizeStrategy["Crop"] = "CROP";
    /** Resizes the image to the specified dimensions, cropping the image if needed. */
    ImageResizeStrategy["Fill"] = "FILL";
    /** Resizes the image to fit into the specified dimensions. */
    ImageResizeStrategy["Fit"] = "FIT";
    /**
     * Resizes the image to the specified dimensions, padding the image if needed.
     *         Uses desired background color as padding color.
     */
    ImageResizeStrategy["Pad"] = "PAD";
    /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
    ImageResizeStrategy["Scale"] = "SCALE";
    /** Creates a thumbnail from the image. */
    ImageResizeStrategy["Thumb"] = "THUMB";
})(ImageResizeStrategy || (ImageResizeStrategy = {}));
export var LinksLinkingCollectionsProjectCollectionOrder;
(function (LinksLinkingCollectionsProjectCollectionOrder) {
    LinksLinkingCollectionsProjectCollectionOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    LinksLinkingCollectionsProjectCollectionOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    LinksLinkingCollectionsProjectCollectionOrder["SysIdAsc"] = "sys_id_ASC";
    LinksLinkingCollectionsProjectCollectionOrder["SysIdDesc"] = "sys_id_DESC";
    LinksLinkingCollectionsProjectCollectionOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    LinksLinkingCollectionsProjectCollectionOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    LinksLinkingCollectionsProjectCollectionOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    LinksLinkingCollectionsProjectCollectionOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    LinksLinkingCollectionsProjectCollectionOrder["TitleAsc"] = "title_ASC";
    LinksLinkingCollectionsProjectCollectionOrder["TitleDesc"] = "title_DESC";
})(LinksLinkingCollectionsProjectCollectionOrder || (LinksLinkingCollectionsProjectCollectionOrder = {}));
export var LinksOrder;
(function (LinksOrder) {
    LinksOrder["LabelAsc"] = "label_ASC";
    LinksOrder["LabelDesc"] = "label_DESC";
    LinksOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    LinksOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    LinksOrder["SysIdAsc"] = "sys_id_ASC";
    LinksOrder["SysIdDesc"] = "sys_id_DESC";
    LinksOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    LinksOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    LinksOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    LinksOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    LinksOrder["UrlAsc"] = "url_ASC";
    LinksOrder["UrlDesc"] = "url_DESC";
})(LinksOrder || (LinksOrder = {}));
export var ProjectLinksCollectionOrder;
(function (ProjectLinksCollectionOrder) {
    ProjectLinksCollectionOrder["LabelAsc"] = "label_ASC";
    ProjectLinksCollectionOrder["LabelDesc"] = "label_DESC";
    ProjectLinksCollectionOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    ProjectLinksCollectionOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    ProjectLinksCollectionOrder["SysIdAsc"] = "sys_id_ASC";
    ProjectLinksCollectionOrder["SysIdDesc"] = "sys_id_DESC";
    ProjectLinksCollectionOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    ProjectLinksCollectionOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    ProjectLinksCollectionOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    ProjectLinksCollectionOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    ProjectLinksCollectionOrder["UrlAsc"] = "url_ASC";
    ProjectLinksCollectionOrder["UrlDesc"] = "url_DESC";
})(ProjectLinksCollectionOrder || (ProjectLinksCollectionOrder = {}));
export var ProjectOrder;
(function (ProjectOrder) {
    ProjectOrder["SysFirstPublishedAtAsc"] = "sys_firstPublishedAt_ASC";
    ProjectOrder["SysFirstPublishedAtDesc"] = "sys_firstPublishedAt_DESC";
    ProjectOrder["SysIdAsc"] = "sys_id_ASC";
    ProjectOrder["SysIdDesc"] = "sys_id_DESC";
    ProjectOrder["SysPublishedAtAsc"] = "sys_publishedAt_ASC";
    ProjectOrder["SysPublishedAtDesc"] = "sys_publishedAt_DESC";
    ProjectOrder["SysPublishedVersionAsc"] = "sys_publishedVersion_ASC";
    ProjectOrder["SysPublishedVersionDesc"] = "sys_publishedVersion_DESC";
    ProjectOrder["TitleAsc"] = "title_ASC";
    ProjectOrder["TitleDesc"] = "title_DESC";
})(ProjectOrder || (ProjectOrder = {}));
