(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-ui-components-module"],{

/***/ "./node_modules/ng2-img-cropper/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-img-cropper/index.js ***!
  \***********************************************/
/*! exports provided: ImageCropperModule, ImageCropperComponent, ImageCropper, CropperSettings, CropperDrawSettings, Bounds, CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/imageCropperModule */ "./node_modules/ng2-img-cropper/src/imageCropperModule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__["ImageCropperModule"]; });

/* harmony import */ var _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/imageCropperComponent */ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"]; });

/* harmony import */ var _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/imageCropper */ "./node_modules/ng2-img-cropper/src/imageCropper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropper"]; });

/* harmony import */ var _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__["CropperSettings"]; });

/* harmony import */ var _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/cropperDrawSettings */ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__["CropperDrawSettings"]; });

/* harmony import */ var _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/model/bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__["Bounds"]; });

/* harmony import */ var _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/model/cropPosition */ "./node_modules/ng2-img-cropper/src/model/cropPosition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__["CropPosition"]; });

// core


// extra classes



// models


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/cropperDrawSettings.js ***!
  \*****************************************************************/
/*! exports provided: CropperDrawSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return CropperDrawSettings; });
var CropperDrawSettings = (function () {
    function CropperDrawSettings() {
        this.strokeWidth = 1;
        this.strokeColor = 'rgba(255,255,255,1)';
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = 'rgba(0,0,0,1)';
        this.dragIconFillColor = 'rgba(255,255,255,1)';
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/cropperSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/cropperSettings.js ***!
  \*************************************************************/
/*! exports provided: CropperSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return CropperSettings; });
/* harmony import */ var _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropperDrawSettings */ "./node_modules/ng2-img-cropper/src/cropperDrawSettings.js");

var CropperSettings = (function () {
    function CropperSettings() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__["CropperDrawSettings"]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.allowedFilesRegex = /\.(jpe?g|png|gif)$/i;
        this.cropOnResize = true;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        // init
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            if (val === false && this._rounded) {
                throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
            }
            this._keepAspect = val;
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/exif.js":
/*!**************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/exif.js ***!
  \**************************************************/
/*! exports provided: Fraction, Debug, Exif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fraction", function() { return Fraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exif", function() { return Exif; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var Debug = (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());

var Exif = (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!(img.exifdata);
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.responseType = 'blob';
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ('src' in img && img.src) {
            if (/^data:/i.test(img.src)) {
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw 'Could not load image';
                        }
                    };
                    http_1.open('GET', img.src, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log('Got file of length ' + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) {
                Debug.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log('Found 0xFFE1 marker');
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4D && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:// undefined, 8-bit byte, value depending on field
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:// ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:// short, 16 bit int
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:// long, 32 bit int
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:// rational = two long values, first is numerator, second is denominator
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:// slong, 32 bit signed int
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:// signed rational, two slongs, first is numerator, second is denominator
                if (numValues === 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = '';
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== 'Exif') {
            Debug.log('Not valid EXIF data! ' + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4D4D) {
                bigEnd = true;
            }
            else {
                Debug.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
            Debug.log('Not valid TIFF data! (no 0x002A)');
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case 'LightSource':
                        case 'Flash':
                        case 'MeteringMode':
                        case 'ExposureProgram':
                        case 'SensingMethod':
                        case 'SceneCaptureType':
                        case 'SceneType':
                        case 'CustomRendered':
                        case 'WhiteBalance':
                        case 'GainControl':
                        case 'Contrast':
                        case 'Saturation':
                        case 'Sharpness':
                        case 'SubjectDistanceRange':
                        case 'FileSource':
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case 'ExifVersion':
                        case 'FlashpixVersion':
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case 'ComponentsConfiguration':
                            var compopents = 'Components';
                            exifData[tag] = Exif.StringValues[compopents][exifData[tag][0]] + Exif.StringValues[compopents][exifData[tag][1]] + Exif.StringValues[compopents][exifData[tag][2]] + Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case 'GPSVersionID':
                            gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    Exif.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    ;
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    ;
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return '';
        }
        var a, data = img.exifdata, strPretty = '';
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === 'object') {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    Exif.debug = false;
    Exif.IptcFieldMap = {
        0x78: 'caption',
        0x6E: 'credit',
        0x19: 'keywords',
        0x37: 'dateCreated',
        0x50: 'byline',
        0x55: 'bylineTitle',
        0x7A: 'captionWriter',
        0x69: 'headline',
        0x74: 'copyright',
        0x0F: 'category'
    };
    Exif.Tags = {
        // version tags
        0x9000: 'ExifVersion',
        0xA000: 'FlashpixVersion',
        // colorspace tags
        0xA001: 'ColorSpace',
        // image configuration
        0xA002: 'PixelXDimension',
        0xA003: 'PixelYDimension',
        0x9101: 'ComponentsConfiguration',
        0x9102: 'CompressedBitsPerPixel',
        // user information
        0x927C: 'MakerNote',
        0x9286: 'UserComment',
        // related file
        0xA004: 'RelatedSoundFile',
        // date and time
        0x9003: 'DateTimeOriginal',
        0x9004: 'DateTimeDigitized',
        0x9290: 'SubsecTime',
        0x9291: 'SubsecTimeOriginal',
        0x9292: 'SubsecTimeDigitized',
        // picture-taking conditions
        0x829A: 'ExposureTime',
        0x829D: 'FNumber',
        0x8822: 'ExposureProgram',
        0x8824: 'SpectralSensitivity',
        0x8827: 'ISOSpeedRatings',
        0x8828: 'OECF',
        0x9201: 'ShutterSpeedValue',
        0x9202: 'ApertureValue',
        0x9203: 'BrightnessValue',
        0x9204: 'ExposureBias',
        0x9205: 'MaxApertureValue',
        0x9206: 'SubjectDistance',
        0x9207: 'MeteringMode',
        0x9208: 'LightSource',
        0x9209: 'Flash',
        0x9214: 'SubjectArea',
        0x920A: 'FocalLength',
        0xA20B: 'FlashEnergy',
        0xA20C: 'SpatialFrequencyResponse',
        0xA20E: 'FocalPlaneXResolution',
        0xA20F: 'FocalPlaneYResolution',
        0xA210: 'FocalPlaneResolutionUnit',
        0xA214: 'SubjectLocation',
        0xA215: 'ExposureIndex',
        0xA217: 'SensingMethod',
        0xA300: 'FileSource',
        0xA301: 'SceneType',
        0xA302: 'CFAPattern',
        0xA401: 'CustomRendered',
        0xA402: 'ExposureMode',
        0xA403: 'WhiteBalance',
        0xA404: 'DigitalZoomRation',
        0xA405: 'FocalLengthIn35mmFilm',
        0xA406: 'SceneCaptureType',
        0xA407: 'GainControl',
        0xA408: 'Contrast',
        0xA409: 'Saturation',
        0xA40A: 'Sharpness',
        0xA40B: 'DeviceSettingDescription',
        0xA40C: 'SubjectDistanceRange',
        // other tags
        0xA005: 'InteroperabilityIFDPointer', 0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image
    };
    Exif.TiffTags = {
        0x0100: 'ImageWidth',
        0x0101: 'ImageHeight',
        0x8769: 'ExifIFDPointer',
        0x8825: 'GPSInfoIFDPointer',
        0xA005: 'InteroperabilityIFDPointer',
        0x0102: 'BitsPerSample',
        0x0103: 'Compression',
        0x0106: 'PhotometricInterpretation',
        0x0112: 'Orientation',
        0x0115: 'SamplesPerPixel',
        0x011C: 'PlanarConfiguration',
        0x0212: 'YCbCrSubSampling',
        0x0213: 'YCbCrPositioning',
        0x011A: 'XResolution',
        0x011B: 'YResolution',
        0x0128: 'ResolutionUnit',
        0x0111: 'StripOffsets',
        0x0116: 'RowsPerStrip',
        0x0117: 'StripByteCounts',
        0x0201: 'JPEGInterchangeFormat',
        0x0202: 'JPEGInterchangeFormatLength',
        0x012D: 'TransferFunction',
        0x013E: 'WhitePoint',
        0x013F: 'PrimaryChromaticities',
        0x0211: 'YCbCrCoefficients',
        0x0214: 'ReferenceBlackWhite',
        0x0132: 'DateTime',
        0x010E: 'ImageDescription',
        0x010F: 'Make',
        0x0110: 'Model',
        0x0131: 'Software',
        0x013B: 'Artist',
        0x8298: 'Copyright'
    };
    Exif.GPSTags = {
        0x0000: 'GPSVersionID',
        0x0001: 'GPSLatitudeRef',
        0x0002: 'GPSLatitude',
        0x0003: 'GPSLongitudeRef',
        0x0004: 'GPSLongitude',
        0x0005: 'GPSAltitudeRef',
        0x0006: 'GPSAltitude',
        0x0007: 'GPSTimeStamp',
        0x0008: 'GPSSatellites',
        0x0009: 'GPSStatus',
        0x000A: 'GPSMeasureMode',
        0x000B: 'GPSDOP',
        0x000C: 'GPSSpeedRef',
        0x000D: 'GPSSpeed',
        0x000E: 'GPSTrackRef',
        0x000F: 'GPSTrack',
        0x0010: 'GPSImgDirectionRef',
        0x0011: 'GPSImgDirection',
        0x0012: 'GPSMapDatum',
        0x0013: 'GPSDestLatitudeRef',
        0x0014: 'GPSDestLatitude',
        0x0015: 'GPSDestLongitudeRef',
        0x0016: 'GPSDestLongitude',
        0x0017: 'GPSDestBearingRef',
        0x0018: 'GPSDestBearing',
        0x0019: 'GPSDestDistanceRef',
        0x001A: 'GPSDestDistance',
        0x001B: 'GPSProcessingMethod',
        0x001C: 'GPSAreaInformation',
        0x001D: 'GPSDateStamp',
        0x001E: 'GPSDifferential'
    };
    Exif.StringValues = {
        ExposureProgram: {
            0: 'Not defined',
            1: 'Manual',
            2: 'Normal program',
            3: 'Aperture priority',
            4: 'Shutter priority',
            5: 'Creative program',
            6: 'Action program',
            7: 'Portrait mode',
            8: 'Landscape mode'
        }, MeteringMode: {
            0: 'Unknown',
            1: 'Average',
            2: 'CenterWeightedAverage',
            3: 'Spot',
            4: 'MultiSpot',
            5: 'Pattern',
            6: 'Partial',
            255: 'Other'
        }, LightSource: {
            0: 'Unknown',
            1: 'Daylight',
            2: 'Fluorescent',
            3: 'Tungsten (incandescent light)',
            4: 'Flash',
            9: 'Fine weather',
            10: 'Cloudy weather',
            11: 'Shade',
            12: 'Daylight fluorescent (D 5700 - 7100K)',
            13: 'Day white fluorescent (N 4600 - 5400K)',
            14: 'Cool white fluorescent (W 3900 - 4500K)',
            15: 'White fluorescent (WW 3200 - 3700K)',
            17: 'Standard light A',
            18: 'Standard light B',
            19: 'Standard light C',
            20: 'D55',
            21: 'D65',
            22: 'D75',
            23: 'D50',
            24: 'ISO studio tungsten',
            255: 'Other'
        }, Flash: {
            0x0000: 'Flash did not fire',
            0x0001: 'Flash fired',
            0x0005: 'Strobe return light not detected',
            0x0007: 'Strobe return light detected',
            0x0009: 'Flash fired, compulsory flash mode',
            0x000D: 'Flash fired, compulsory flash mode, return light not detected',
            0x000F: 'Flash fired, compulsory flash mode, return light detected',
            0x0010: 'Flash did not fire, compulsory flash mode',
            0x0018: 'Flash did not fire, auto mode',
            0x0019: 'Flash fired, auto mode',
            0x001D: 'Flash fired, auto mode, return light not detected',
            0x001F: 'Flash fired, auto mode, return light detected',
            0x0020: 'No flash function',
            0x0041: 'Flash fired, red-eye reduction mode',
            0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
            0x0047: 'Flash fired, red-eye reduction mode, return light detected',
            0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
            0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
            0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
            0x0059: 'Flash fired, auto mode, red-eye reduction mode',
            0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
            0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
        }, SensingMethod: {
            1: 'Not defined',
            2: 'One-chip color area sensor',
            3: 'Two-chip color area sensor',
            4: 'Three-chip color area sensor',
            5: 'Color sequential area sensor',
            7: 'Trilinear sensor',
            8: 'Color sequential linear sensor'
        }, SceneCaptureType: {
            0: 'Standard', 1: 'Landscape', 2: 'Portrait', 3: 'Night scene'
        }, SceneType: {
            1: 'Directly photographed'
        }, CustomRendered: {
            0: 'Normal process', 1: 'Custom process'
        }, WhiteBalance: {
            0: 'Auto white balance', 1: 'Manual white balance'
        }, GainControl: {
            0: 'None', 1: 'Low gain up', 2: 'High gain up', 3: 'Low gain down', 4: 'High gain down'
        }, Contrast: {
            0: 'Normal', 1: 'Soft', 2: 'Hard'
        }, Saturation: {
            0: 'Normal', 1: 'Low saturation', 2: 'High saturation'
        }, Sharpness: {
            0: 'Normal', 1: 'Soft', 2: 'Hard'
        }, SubjectDistanceRange: {
            0: 'Unknown', 1: 'Macro', 2: 'Close view', 3: 'Distant view'
        }, FileSource: {
            3: 'DSC'
        },
        Components: {
            0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B'
        }
    };
    return Exif;
}());

//# sourceMappingURL=exif.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropper.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropper.js ***!
  \**********************************************************/
/*! exports provided: ImageCropper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return ImageCropper; });
/* harmony import */ var _model_bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");
/* harmony import */ var _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/cornerMarker */ "./node_modules/ng2-img-cropper/src/model/cornerMarker.js");
/* harmony import */ var _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/cropTouch */ "./node_modules/ng2-img-cropper/src/model/cropTouch.js");
/* harmony import */ var _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/dragMarker */ "./node_modules/ng2-img-cropper/src/model/dragMarker.js");
/* harmony import */ var _model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/imageCropperModel */ "./node_modules/ng2-img-cropper/src/model/imageCropperModel.js");
/* harmony import */ var _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageCropperDataShare */ "./node_modules/ng2-img-cropper/src/imageCropperDataShare.js");
/* harmony import */ var _model_pointPool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        if (width === void 0) {
            _this.width = 100;
        }
        if (height === void 0) {
            _this.height = 50;
        }
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.keepAspect = false;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"](200);
        _this.tl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"](x + (width / 2), y + (height / 2), touchRadius, _this.cropperSettings);
        _this.keepAspect = keepAspect;
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            if (!this.cropperSettings.rounded) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(a);
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.cropperSettings.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.cropperSettings.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImageHelper(false, this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                actualW = scaledW;
            }
            else {
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY + actualH);
        var trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY);
        var brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY);
        var center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCroppedImageHelper = function (preserveSize, fillWidth, fillHeight) {
        if (this.cropperSettings.cropOnResize) {
            return this.getCroppedImage(preserveSize, fillWidth, fillHeight);
        }
        return this.croppedImage ? this.croppedImage : document.createElement('img');
    };
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = function (preserveSize, fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize || preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            else {
                this.cropCanvas.width = this.cropWidth;
                this.cropCanvas.height = this.cropHeight;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new _model_bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            event.preventDefault();
            if (event.touches.length === 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    var touch = event.touches[i];
                    var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                    var cropTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](touchPosition.x, touchPosition.y, touch.identifier);
                    _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(touchPosition);
                    this.move(cropTouch);
                }
            }
            else {
                if (event.touches.length === 2) {
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var bounds = this.getBounds();
                        if (distance < this.previousDistance) {
                            bounds.top += 1;
                            bounds.left += 1;
                            bounds.right -= 1;
                            bounds.bottom -= 1;
                        }
                        if (distance > this.previousDistance) {
                            if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.right += 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.top -= 1;
                                bounds.left -= 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.left -= 1;
                                bounds.right += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.right += 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.left -= 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.right += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                bounds.top -= 2;
                                bounds.left -= 2;
                            }
                        }
                        if (bounds.top < this.minYClamp)
                            bounds.top = this.minYClamp;
                        if (bounds.bottom > this.maxYClamp)
                            bounds.bottom = this.maxYClamp;
                        if (bounds.left < this.minXClamp)
                            bounds.left = this.minXClamp;
                        if (bounds.right > this.maxXClamp)
                            bounds.right = this.maxXClamp;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0);
            }
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    // todo: Unused param
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"] || dragTouch.dragHandle instanceof _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](0, 0, 0));
        }
    };
    return ImageCropper;
}(_model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__["ImageCropperModel"]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperComponent.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCropper */ "./node_modules/ng2-img-cropper/src/imageCropper.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");
/* harmony import */ var _exif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exif */ "./node_modules/ng2-img-cropper/src/exif.js");
/* harmony import */ var _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/cropPosition */ "./node_modules/ng2-img-cropper/src/model/cropPosition.js");





var ImageCropperComponent = (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        }
        this.renderer.setElementAttribute(canvas, 'class', this.settings.cropperClass);
        if (!this.settings.dynamicSizing) {
            this.renderer.setElementAttribute(canvas, 'width', this.settings.canvasWidth.toString());
            this.renderer.setElementAttribute(canvas, 'height', this.settings.canvasHeight.toString());
        }
        else {
            this.windowListener = this.resize.bind(this);
            window.addEventListener('resize', this.windowListener);
        }
        if (!this.cropper) {
            this.cropper = new _imageCropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropper"](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImageHelper().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
        if (changes.inputImage) {
            this.setImage(changes.inputImage.currentValue);
        }
    };
    ImageCropperComponent.prototype.ngOnDestroy = function () {
        if (this.settings.dynamicSizing && this.windowListener) {
            window.removeEventListener('resize', this.windowListener);
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            var that_1 = this;
            fileReader.addEventListener('loadend', function (loadEvent) {
                image_1.addEventListener('load', function () {
                    that_1.setImage(image_1);
                });
                image_1.src = loadEvent.target.result;
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.resize = function () {
        var canvas = this.cropcanvas.nativeElement;
        this.settings.canvasWidth = canvas.offsetWidth;
        this.settings.canvasHeight = canvas.offsetHeight;
        this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImageHelper().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        var self = this;
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass + " " + this.settings.croppingClass);
        this.raf = window.requestAnimationFrame(function () {
            if (self.raf) {
                window.cancelAnimationFrame(self.raf);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                window.cancelAnimationFrame(self.raf);
                self.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    self.cropper.setImage(img);
                    if (self.cropPosition && self.cropPosition.isInitialized()) {
                        self.cropper.updateCropPosition(self.cropPosition.toBounds());
                    }
                    self.image.original = img;
                    var bounds = self.cropper.getCropBounds();
                    self.image.image = self.cropper.getCroppedImageHelper().src;
                    if (newBounds != null) {
                        bounds = newBounds;
                        self.cropper.setBounds(bounds);
                        _this.cropper.updateCropPosition(bounds);
                    }
                    self.onCrop.emit(bounds);
                });
            }
        });
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper && changes['cropPosition'] && this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__["CropPosition"](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getData(image, function () {
            var orientation = _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getTag(image, 'Orientation');
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement('img');
                img.width = cw;
                img.height = ch;
                img.addEventListener('load', function () {
                    callback(img);
                });
                img.src = canvas.toDataURL('image/png');
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'img-cropper',
                    template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
                },] },
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    ImageCropperComponent.propDecorators = {
        'cropcanvas': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cropcanvas', undefined,] },],
        'settings': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['settings',] },],
        'image': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['image',] },],
        'inputImage': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['inputImage',] },],
        'cropper': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'cropPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'cropPositionChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'onCrop': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ImageCropperComponent;
}());

//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperDataShare.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperDataShare.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperDataShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperDataShare", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ;
    ImageCropperDataShare.share = {};
    return ImageCropperDataShare;
}());

//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/imageCropperModule.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/imageCropperModule.js ***!
  \****************************************************************/
/*! exports provided: ImageCropperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCropperComponent */ "./node_modules/ng2-img-cropper/src/imageCropperComponent.js");



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]],
                    exports: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]]
                },] },
    ];
    /** @nocollapse */
    ImageCropperModule.ctorParameters = function () { return []; };
    return ImageCropperModule;
}());

//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/bounds.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/bounds.js ***!
  \**********************************************************/
/*! exports provided: Bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return Bounds; });
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");

var Bounds = (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return _pointPool__WEBPACK_IMPORTED_MODULE_0__["PointPool"].instance.borrow(this.left + (w / 2), this.top + (h / 2));
    };
    ;
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cornerMarker.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cornerMarker.js ***!
  \****************************************************************/
/*! exports provided: CornerMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerMarker", function() { return CornerMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ng2-img-cropper/src/model/handle.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        ctx.lineJoin = 'miter';
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.7)';
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cropPosition.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cropPosition.js ***!
  \****************************************************************/
/*! exports provided: CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return CropPosition; });
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounds */ "./node_modules/ng2-img-cropper/src/model/bounds.js");

var CropPosition = (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new _bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/cropTouch.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/cropTouch.js ***!
  \*************************************************************/
/*! exports provided: CropTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropTouch", function() { return CropTouch; });
var CropTouch = (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/dragMarker.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/dragMarker.js ***!
  \**************************************************************/
/*! exports provided: DragMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragMarker", function() { return DragMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ng2-img-cropper/src/model/handle.js");
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ng2-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, -maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
            var p = points[k];
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        _pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.returnPoint(c);
    };
    return DragMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/handle.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/handle.js ***!
  \**********************************************************/
/*! exports provided: Handle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ng2-img-cropper/src/model/point.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropperSettings */ "./node_modules/ng2-img-cropper/src/cropperSettings.js");


var Handle = (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        this.over = false;
        this.drag = false;
        this._position = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](x, y);
        this.offset = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x) &&
            (x < this.position.x + this.radius + this.offset.x) &&
            (y > this.position.y - this.radius + this.offset.y) &&
            (y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/imageCropperModel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/imageCropperModel.js ***!
  \*********************************************************************/
/*! exports provided: ImageCropperModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModel", function() { return ImageCropperModel; });
var ImageCropperModel = (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/point.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/point.js ***!
  \*********************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/ng2-img-cropper/src/model/pointPool.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-img-cropper/src/model/pointPool.js ***!
  \*************************************************************/
/*! exports provided: PointPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPool", function() { return PointPool; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ng2-img-cropper/src/model/point.js");

var PointPool = (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = this.firstAvailable = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]();
        for (var i = 1; i < initialSize; i++) {
            var p = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw 'Pool exhausted';
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    ;
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    ;
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ }),

/***/ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js ***!
  \***************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "showCaret": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2DropdownButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var /** @type {?} */ ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DropdownStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = /**
     * \@name getMenuElement
     * @return {?}
     */
    function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updateOnChange = /**
     * @param {?=} dynamic
     * @return {?}
     */
    function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-menu',
                    styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                    template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'block', height: '*', width: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none', overflow: 'hidden', height: 0, width: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1, height: '*', width: '*' }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1, width: '0', height: '0' }),
                                ]))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('opacity', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.5, offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2DropdownMenu.propDecorators = {
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Ng2MenuItem,] },],
    };
    return Ng2DropdownMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var /** @type {?} */ newSelectedItem;
            var /** @type {?} */ items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = /**
     * \@name scrollListener
     * @return {?}
     */
    function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown',
                    template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                    providers: [DropdownStateService]
                },] },
    ];
    /** @nocollapse */
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService, },
    ]; };
    Ng2Dropdown.propDecorators = {
        "button": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownButton,] },],
        "menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownMenu,] },],
        "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onItemClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onItemSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
    };
    return Ng2Dropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                        Ng2Dropdown
                    ],
                    declarations: [
                        Ng2Dropdown,
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                },] },
    ];
    return Ng2DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS9hY3Rpb25zLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL25nMi1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIElucHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1idXR0b24nLFxuICAgIHN0eWxlczogW2AubmcyLWRyb3Bkb3duLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzouNDVyZW0gLjI1cmVtO2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wOHJlbTtjb2xvcjojNDQ0O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXgtd2lkdGg6MTUwcHh9Lm5nMi1kcm9wZG93bi1idXR0b246aG92ZXJ7Y29sb3I6IzIyMn0ubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmUsLm5nMi1kcm9wZG93bi1idXR0b246Zm9jdXN7Y29sb3I6IzIyMjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE5NmYzfS5uZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbHtmbGV4OjEgMSA5NSV9Lm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDYlfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9ue2JvcmRlcjpub25lO21pbi13aWR0aDo0MHB4O3dpZHRoOjQwcHg7Ym9yZGVyLXJhZGl1czoxMDAlO3RyYW5zaXRpb246YWxsIC4yczt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDtwYWRkaW5nOi41ZW19Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9YF0sXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPSduZzItZHJvcGRvd24tYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiIHRhYmluZGV4PVwiMHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0XCIgKm5nSWY9XCJzaG93Q2FyZXRcIj5cbiAgICAgICAgPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiBoZWlnaHQ9XCIxNnB4XCIgaWQ9XCLDkMKhw5DCu8OQwr7DkMK5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93blN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuY29uc3QgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDksXG4gICAgUFJFVjogMzgsXG4gICAgTkVYVDogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjdcbn07XG5cbi8qKlxuICogQG5hbWUgb25Td2l0Y2hOZXh0XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uU3dpdGNoTmV4dCA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoUHJldlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaFByZXYgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggLSAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvbkJhY2tzcGFjZVxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkJhY2tzcGFjZSA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbMF0sIHRydWUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9uRXNjYXBlKHRoaXM6IE5nMkRyb3Bkb3duTWVudSkge1xuICAgIHRoaXMuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uSXRlbUNsaWNrZWQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHN0YXRlLnNlbGVjdGVkSXRlbS5jbGljaygpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgW0tFWVMuQkFDS1NQQUNFXTogb25CYWNrc3BhY2UsXG4gICAgW0tFWVMuUFJFVl06IG9uU3dpdGNoUHJldixcbiAgICBbS0VZUy5ORVhUXTogb25Td2l0Y2hOZXh0LFxuICAgIFtLRVlTLkVOVEVSXTogb25JdGVtQ2xpY2tlZCxcbiAgICBbS0VZUy5FU0NBUEVdOiBvbkVzY2FwZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93S2V5c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM4LCA0MF0uaW5kZXhPZihldmVudC5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duU3RhdGUge1xuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1EZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqIEBkZXNjIGdldHRlciBmb3IgX3NlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RzIGEgbWVudSBpdGVtIGFuZCBlbWl0cyBldmVudFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZCwgZGlzcGF0Y2hFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICBpZiAoIWRpc3BhdGNoRXZlbnQgfHwgIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdW5zZWxlY3RcbiAgICAgKiBAZGVzYyBzZXRzIF9zZWxlY3RlZEl0ZW0gYXMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHVuc2VsZWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFJlbmRlcmVyLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGFuaW1hdGUsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBQ1RJT05TLCBhcnJvd0tleXNIYW5kbGVyIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1tZW51JyxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnV7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMyk7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzouNWVtIDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MXB4O21heC1oZWlnaHQ6NDAwcHg7d2lkdGg6MjYwcHg7bWluLWhlaWdodDowO2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudHtwb3NpdGlvbjpmaXhlZH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS0ye3dpZHRoOjIwMHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTR7d2lkdGg6MjYwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNnt3aWR0aDozMjBweH0ubmcyLWRyb3Bkb3duLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5uZzItbWVudS1kaXZpZGVye2hlaWdodDoxcHg7bWluLWhlaWdodDoxcHg7bWF4LWhlaWdodDoxcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2Y5ZjlmOX1gXSxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTUVOVSAtLT5cbjxkaXYgY2xhc3M9J25nMi1kcm9wZG93bi1tZW51IG5nMi1kcm9wZG93bi1tZW51LS0td2lkdGgtLXt7IHdpZHRoIH19J1xuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50XT1cIiFhcHBlbmRUb0JvZHlcIlxuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLW9wZW5dPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiXG4gICAgIFtzdHlsZS56LWluZGV4XT1cInpJbmRleFwiXG4gICAgIFtAZmFkZV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLW1lbnVfX29wdGlvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBbQG9wYWNpdHldPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBCQUNLRFJPUCAtLT5cbjxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tYmFja2Ryb3BcIiAqbmdJZj1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIiAoY2xpY2spPVwiaGlkZSgpXCI+PC9kaXY+XG5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdibG9jaycsIGhlaWdodDogJyonLCB3aWR0aDogJyonfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdub25lJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMH0pLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMSwgb2Zmc2V0OiAxLCBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJ30pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCczNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMSwgd2lkdGg6ICcwJywgaGVpZ2h0OiAnMCd9KSxcbiAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdvcGFjaXR5JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDUwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjN9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTWVudSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2lkdGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkcm9wZG93biB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZFxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXRzIGRyb3Bkb3duIG9mZnNldCBmcm9tIHRoZSBidXR0b25cbiAgICAgKiBAbmFtZSBvZmZzZXQge3N0cmluZ30gZm9sbG93IGZvcm1hdCAnPG51bWJlcj4gPG51bWJlcj4nIGV4LiAnMCAyMCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKE5nMk1lbnVJdGVtKSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZzJNZW51SXRlbT47XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIGFycm93SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBoYW5kbGVLZXlwcmVzczogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBzaG93cyBtZW51IGFuZCBzZWxlY3RzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbj86IENsaWVudFJlY3QsIGR5bmFtaWMgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIGhhbmRsZXJzXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRjLmJvZHksICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlwcmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdkLCAna2V5ZG93bicsIGFycm93S2V5c0hhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCBkeW5hbWljKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKiBAZGVzYyBoaWRlcyBtZW51XG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnVuc2VsZWN0KCk7XG5cbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1bmxpc3RlblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPyB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPyB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICogQGRlc2MgdXBkYXRlcyB0aGUgbWVudSBwb3NpdGlvbiBldmVyeSB0aW1lIGl0IGlzIHRvZ2dsZWRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24ge0NsaWVudFJlY3R9XG4gICAgICogQHBhcmFtIGR5bmFtaWMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBDbGllbnRSZWN0LCBkeW5hbWljOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVPbkNoYW5nZShkeW5hbWljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlwcmVzc1xuICAgICAqIEBkZXNjIGV4ZWN1dGVzIGZ1bmN0aW9ucyBvbiBrZXlQcmVzcyBiYXNlZCBvbiB0aGUga2V5IHByZXNzZWRcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleXByZXNzKCRldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICghQUNUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBQ1RJT05TW2tleV0uY2FsbCh0aGlzLCBpbmRleCwgaXRlbXMsIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0TWVudUVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1lbnVFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY1Bvc2l0aW9uT2Zmc2V0XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb25PZmZzZXQocG9zaXRpb24pOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghd2QgfHwgIWRjIHx8ICFwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3ZC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpc0NTUzFDb21wYXQgPSAoKGRjLmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuXG4gICAgICAgIGNvbnN0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZGMuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkYy5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuYXBwbHlPZmZzZXQoXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi50b3AgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyB5IC0gMTUgOiAwKX1weGAsXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi5sZWZ0ICsgeCAtIDV9cHhgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tQm90dG9tID0gcGFyc2VJbnQodG9wKSArIGNsaWVudEhlaWdodCArICh0aGlzLmFwcGVuZFRvQm9keSA/IDAgOiB5IC0gMTUpO1xuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tUmlnaHQgPSBwYXJzZUludChsZWZ0KSArIGNsaWVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbEhlaWdodCA9IHdkLmlubmVySGVpZ2h0ICsgd2Quc2Nyb2xsWTtcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsV2lkdGggPSB3ZC5pbm5lcldpZHRoICsgd2Quc2Nyb2xsWDtcblxuICAgICAgICBpZiAobWFyZ2luRnJvbUJvdHRvbSA+PSB3aW5kb3dTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgLSBjbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21SaWdodCA+PSB3aW5kb3dTY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBtYXJnaW5Gcm9tUmlnaHQgLSB3aW5kb3dTY3JvbGxXaWR0aCArIDMwO1xuICAgICAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpIC0gbWFyZ2luUmlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU9mZnNldCh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKCFvZmZzZXRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldFsxXSA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMF0pfXB4YDtcbiAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzFdKX1weGA7XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgICAgICBkYy5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShkeW5hbWljID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uT2Zmc2V0KHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ3RvcCcsIHBvc2l0aW9uLnRvcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICdsZWZ0JywgcG9zaXRpb24ubGVmdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdCBmaXJzdCBpdGVtIHVubGVzcyB1c2VyIGRpc2FibGVkIHRoaXMgb3B0aW9uXG4gICAgICAgIGlmICh0aGlzLmZvY3VzRmlyc3RFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZpcnN0ICYmXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLml0ZW1zLmZpcnN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd25CdXR0b24gfSBmcm9tICcuLi9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogWyBEcm9wZG93blN0YXRlU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duIHtcbiAgICAvLyBnZXQgY2hpbGRyZW4gY29tcG9uZW50c1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25CdXR0b24pIHB1YmxpYyBidXR0b246IE5nMkRyb3Bkb3duQnV0dG9uO1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25NZW51KSBwdWJsaWMgbWVudTogTmcyRHJvcGRvd25NZW51O1xuXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gb3V0cHV0c1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93OiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkLmVtaXQoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ub25NZW51VG9nZ2xlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtU2VsZWN0ZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnUuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWVudS5mb2N1c0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkSXRlbSA9IGl0ZW0gPT09IGl0ZW1zWzBdICYmIGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtc1sxXSA6IGl0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyB0b2dnbGVzIG1lbnUgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBoaWRlcyBkcm9wZG93blxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3dzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51LnVwZGF0ZVBvc2l0aW9uKHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmcyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vbmcyLWRyb3Bkb3duJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZzJNZW51SXRlbSxcbiAgICAgICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgICAgIE5nMkRyb3Bkb3duTWVudSxcbiAgICAgICAgTmcyRHJvcGRvd25cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZzJEcm9wZG93bixcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25Nb2R1bGUge31cblxuZXhwb3J0IHtcbiAgICBOZzJEcm9wZG93bixcbiAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgTmcyTWVudUl0ZW0sXG4gICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgRHJvcGRvd25TdGF0ZVNlcnZpY2Vcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQTBCSSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs2QkFIaUIsSUFBSSxZQUFZLEVBQVc7eUJBQzlDLElBQUk7S0FFRTs7Ozs7O0lBTXBDLHNDQUFVOzs7Ozs7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU8zQix1Q0FBVzs7Ozs7O1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7O2dCQWpDL0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE1BQU0sRUFBRSxDQUFDLHMyQkFBbzJCLENBQUM7b0JBQzkyQixRQUFRLEVBQUUseTJCQVNiO2lCQUNBOzs7O2dCQWhCRyxVQUFVOzs7a0NBa0JULE1BQU07OEJBQ04sS0FBSzs7NEJBeEJWOzs7Ozs7O0FDSUEscUJBQU0sSUFBSSxHQUFHO0lBQ1QsU0FBUyxFQUFFLENBQUM7SUFDWixJQUFJLEVBQUUsRUFBRTtJQUNSLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDN0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0NBQ0osQ0FBQzs7Ozs7QUFFRjtJQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNmO0FBQUE7Ozs7OztBQVFELHFCQUFNLGFBQWEsR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFQSxRQUF1QjtJQUMvRSxPQUFPQSxRQUFLLENBQUMsWUFBWSxHQUFHQSxRQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQztDQUN0RSxDQUFDO0FBRUsscUJBQU0sT0FBTztJQUNoQixHQUFDLElBQUksQ0FBQyxTQUFTLElBQUcsV0FBVztJQUM3QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsYUFBYTtJQUMzQixHQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsUUFBUTtPQUMxQixDQUFDOzs7OztBQUVGLDBCQUFpQyxLQUFLO0lBQ2xDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDMUI7Q0FDSjs7Ozs7OztBQzVFRCxBQUVBLElBQUE7OzhCQUN1RCxJQUFJLFlBQVksRUFBZTs2QkFDaEMsSUFBSSxZQUFZLEVBQWU7K0JBQzdCLElBQUksWUFBWSxFQUFlOzswQkFReEUsMENBQVk7Ozs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7OztJQU92QixpQ0FBTTs7Ozs7O2NBQUMsSUFBNkIsRUFBRSxhQUFvQjtRQUFwQiw4QkFBQSxFQUFBLG9CQUFvQjtRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTzVCLG1DQUFROzs7Ozs7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7MkJBdEN2QztJQXdDQyxDQUFBOzs7Ozs7QUN4Q0Q7O3lCQUt1QjtZQUNmLFNBQVMsb0JBQVcsS0FBSyxDQUFBO1lBQ3pCLFFBQVE7OztZQUFSO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUN6RDtTQUNKOzZCQUV3QyxJQUFJLGdCQUFnQixFQUFFOzs7Z0JBVGxFLFVBQVU7OytCQUhYOzs7Ozs7O0FDQUE7SUFxQ0kscUJBQW9CQSxRQUEyQixFQUMzQixTQUNBO1FBRkEsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzNCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7OzRCQVZZLEtBQUs7S0FVSDs7OztJQUVuQyxpQ0FBVzs7OztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OzBCQU83QyxtQ0FBVTs7Ozs7OztZQUNqQixPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBT25ELDRCQUFNOzs7Ozs7Y0FBQyxNQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNCOzs7Ozs7O0lBT0UsMkJBQUs7Ozs7OztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU0vQywyQkFBSzs7Ozs7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O2dCQXBFMUYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyx1bUJBQXFtQixDQUFDO29CQUMvbUIsUUFBUSxFQUFFLHFRQVNiO2lCQUNBOzs7O2dCQWZRLG9CQUFvQjtnQkFKekIsVUFBVTtnQkFEVixRQUFROzs7aUNBMEJQLEtBQUs7MEJBTUwsS0FBSzs7c0JBbkNWOzs7Ozs7O0FDQUE7SUF1SEkseUJBQW1CQSxRQUEyQixFQUMxQixTQUNBO1FBRkQsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzFCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7cUJBdENJLENBQUM7Ozs7O2lDQU1ZLElBQUk7Ozs7NEJBV1QsSUFBSTs7OztzQkFLbkIsSUFBSTt5QkFTVDtZQUNoQixZQUFZLEVBQUUsU0FBUztZQUN2QixjQUFjLEVBQUUsU0FBUztTQUM1QjtLQUl5Qzs7Ozs7Ozs7SUFNbkMsOEJBQUk7Ozs7Ozs7Y0FBQyxRQUFxQixFQUFFLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDN0MscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ2xFLHFCQUFNLEVBQUUsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN2Rjs7UUFHRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUM7Ozs7Ozs7SUFPRSw4QkFBSTs7Ozs7O1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFHdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR3BDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7SUFTekUsd0NBQWM7Ozs7Ozs7Y0FBQyxRQUFvQixFQUFFLE9BQWdCO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBUTFCLHdDQUFjOzs7Ozs7Y0FBQyxNQUFNO1FBQ3hCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBTTVELHdDQUFjOzs7OztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU8xQyw0Q0FBa0I7Ozs7O2NBQUMsUUFBUTtRQUMvQixxQkFBTSxFQUFFLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUQscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRWxFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQztRQUN2RCxxQkFBTSxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQztRQUU5RCxxQkFBTSxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZO1lBQ3ZELEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXZELHFCQUFNLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVk7WUFDdkQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckQsaUhBQU0sWUFBRyxFQUFFLGNBQUksQ0FHYjtRQUVGLHFCQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hDLHFCQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRTFDLHFCQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLHFCQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXJELHFCQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFFckQsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsRUFBRTtZQUN4QyxHQUFHLEdBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxPQUFJLENBQUM7U0FDL0Q7UUFFRCxJQUFJLGVBQWUsSUFBSSxpQkFBaUIsRUFBRTtZQUN0QyxxQkFBTSxXQUFXLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsV0FBVyxPQUFJLENBQUM7U0FDaEU7UUFFRCxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7OztJQUdqQixxQ0FBVzs7Ozs7Y0FBQyxHQUFXLEVBQUUsSUFBWTtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ25CO1FBRUQsR0FBRyxHQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSSxDQUFDO1FBQ25FLElBQUksR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUksQ0FBQztRQUVyRSxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7SUFHbEIsa0NBQVE7Ozs7UUFDWCxxQkFBTSxFQUFFLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVuQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EOzs7Ozs7SUFHRSx3Q0FBYzs7OztjQUFDLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDaEMscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVFOztRQUdELElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEOzs7OztJQUdFLHFDQUFXOzs7O1FBQ2QscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuQzs7O2dCQTVRUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsTUFBTSxFQUFFLENBQUMsdXFCQUF1cUIsQ0FBQztvQkFDanJCLFFBQVEsRUFBRSwybEJBY2I7b0JBQ0csVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQ1osS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQ2xCLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FDOUMsQ0FBQzs0QkFDRixLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FDakIsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQzdELENBQUM7NEJBQ0YsVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQztvQ0FDL0IsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0NBQzlCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztpQ0FDMUQsQ0FBQyxDQUFDOzZCQUNOLENBQUM7NEJBQ0YsVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO29DQUNoQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQ0FDOUIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2lDQUMxRCxDQUFDLENBQUM7NkJBQ04sQ0FBQzt5QkFDTCxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxTQUFTLEVBQUU7NEJBQ2YsVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQztvQ0FDL0IsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0NBQzlCLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2lDQUNqQyxDQUFDLENBQUM7NkJBQ04sQ0FBQzs0QkFDRixVQUFVLENBQUMsbUJBQW1CLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUM7b0NBQ2hDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29DQUM5QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztvQ0FDbEMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7aUNBQ2pDLENBQUMsQ0FBQzs2QkFDTixDQUFDO3lCQUNMLENBQUM7cUJBQ0w7aUJBQ0o7Ozs7Z0JBekRRLG9CQUFvQjtnQkFuQnpCLFVBQVU7Z0JBQ1YsUUFBUTs7OzBCQWdGUCxLQUFLO3NDQU1MLEtBQUs7MkJBTUwsS0FBSztpQ0FLTCxLQUFLOzJCQUtMLEtBQUs7MEJBS0wsZUFBZSxTQUFDLFdBQVc7OzBCQTlHaEM7Ozs7Ozs7QUNBQTtJQW9DSSxxQkFBb0JBLFFBQTJCO1FBQTNCLFVBQUssR0FBTEEsUUFBSyxDQUFzQjs2QkFSZixJQUFJOzs2QkFHbUIsSUFBSSxZQUFZLEVBQVU7OEJBQ3pCLElBQUksWUFBWSxFQUFVO3NCQUM3QixJQUFJLFlBQVksRUFBZTtzQkFDL0IsSUFBSSxZQUFZLEVBQWU7S0FFakM7Ozs7SUFFNUMsOEJBQVE7Ozs7O1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDakQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixPQUFPO2FBQ1Y7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztTQUN4QixDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFpQjtZQUNqRSxxQkFBSSxlQUF3QyxDQUFDO1lBQzdDLHFCQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV4QyxJQUFJLElBQUksS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hELE9BQU87YUFDVjtZQUVELElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDN0IsZUFBZSxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRjtZQUVELEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7Ozs7Ozs7O0lBT0EsZ0NBQVU7Ozs7OztjQUFDLFFBQW9DO1FBQXBDLHlCQUFBLEVBQUEsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7SUFPaEUsMEJBQUk7Ozs7OztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O0lBUXBCLDBCQUFJOzs7Ozs7Y0FBQyxRQUFvQztRQUFwQyx5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBT3BCLG9DQUFjOzs7OztRQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdEOzs7Z0JBL0ZSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDRLQUliO29CQUNHLFNBQVMsRUFBRSxDQUFFLG9CQUFvQixDQUFFO2lCQUN0Qzs7OztnQkFYUSxvQkFBb0I7OzsyQkFjeEIsWUFBWSxTQUFDLGlCQUFpQjt5QkFDOUIsWUFBWSxTQUFDLGVBQWU7a0NBRTVCLEtBQUs7a0NBR0wsTUFBTTttQ0FDTixNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTTttQ0F1RU4sWUFBWSxTQUFDLGVBQWU7O3NCQXpHakM7Ozs7Ozs7QUNBQTs7OztnQkFTQyxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLFdBQVc7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO2lCQUNKOzs0QkF6QkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/ng2-nouislider/src/ng2-nouislider.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-nouislider/src/ng2-nouislider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var DefaultFormatter = (function () {
    function DefaultFormatter() {
    }
    DefaultFormatter.prototype.to = function (value) {
        // formatting with http://stackoverflow.com/a/26463364/478584
        return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    };
    ;
    DefaultFormatter.prototype.from = function (value) {
        return parseFloat(value);
    };
    return DefaultFormatter;
}());
exports.DefaultFormatter = DefaultFormatter;
var NouisliderComponent = (function () {
    function NouisliderComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.config = {};
        this.change = new core_1.EventEmitter(true);
        this.update = new core_1.EventEmitter(true);
        this.slide = new core_1.EventEmitter(true);
        this.set = new core_1.EventEmitter(true);
        this.start = new core_1.EventEmitter(true);
        this.end = new core_1.EventEmitter(true);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.eventHandler = function (emitter, values, handle, unencoded) {
            var v = _this.toValues(values);
            var emitEvents = false;
            if (_this.value === undefined) {
                _this.value = v;
                return;
            }
            if (Array.isArray(v) && _this.value[handle] != v[handle]) {
                emitEvents = true;
            }
            if (!Array.isArray(v) && _this.value != v) {
                emitEvents = true;
            }
            if (emitEvents) {
                emitter.emit(v);
                _this.onChange(v);
            }
            if (Array.isArray(v)) {
                _this.value[handle] = v[handle];
            }
            else {
                _this.value = v;
            }
        };
        this.defaultKeyHandler = function (e) {
            var stepSize = _this.slider.steps();
            var index = parseInt(e.target.getAttribute('data-handle'));
            var sign = 1;
            var multiplier = 1;
            var step = 0;
            var delta = 0;
            switch (e.which) {
                case 34:// PageDown
                    multiplier = _this.config.pageSteps;
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    sign = -1;
                    step = stepSize[index][0];
                    e.preventDefault();
                    break;
                case 33:// PageUp
                    multiplier = _this.config.pageSteps;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    step = stepSize[index][1];
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            delta = sign * multiplier * step;
            var newValue;
            if (Array.isArray(_this.value)) {
                newValue = [].concat(_this.value);
                newValue[index] = newValue[index] + delta;
            }
            else {
                newValue = _this.value + delta;
            }
            _this.slider.set(newValue);
        };
    }
    NouisliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inputsConfig = JSON.parse(JSON.stringify({
            behaviour: this.behaviour,
            connect: this.connect,
            limit: this.limit,
            start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
            step: this.step,
            pageSteps: this.pageSteps,
            keyboard: this.keyboard,
            onKeydown: this.onKeydown,
            range: this.config.range || { min: this.min, max: this.max },
        }));
        inputsConfig.tooltips = this.tooltips || this.config.tooltips;
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.slider = noUiSlider.create(this.el.nativeElement.querySelector('div'), Object.assign(this.config, inputsConfig));
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));
        if (this.config.keyboard) {
            if (this.config.pageSteps === undefined) {
                this.config.pageSteps = 10;
            }
            var _loop_1 = function (handle) {
                handle.setAttribute('tabindex', 0);
                handle.addEventListener('click', function () {
                    handle.focus();
                });
                if (this_1.config.onKeydown === undefined) {
                    handle.addEventListener('keydown', this_1.defaultKeyHandler);
                }
                else {
                    handle.addEventListener('keydown', this_1.config.onKeydown);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                var handle = _a[_i];
                _loop_1(handle);
            }
        }
        this.slider.on('set', function (values, handle, unencoded) {
            _this.eventHandler(_this.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
            _this.update.emit(_this.toValues(values));
        });
        this.slider.on('change', function (values, handle, unencoded) {
            _this.change.emit(_this.toValues(values));
        });
        this.slider.on('slide', function (values, handle, unencoded) {
            _this.eventHandler(_this.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
            _this.start.emit(_this.toValues(values));
        });
        this.slider.on('end', function (values, handle, unencoded) {
            _this.end.emit(_this.toValues(values));
        });
    };
    NouisliderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.slider && (changes.min || changes.max || changes.step)) {
            setTimeout(function () {
                _this.slider.updateOptions({
                    range: {
                        min: _this.min,
                        max: _this.max
                    },
                    step: _this.step
                });
            });
        }
    };
    NouisliderComponent.prototype.toValues = function (values) {
        var v = values.map(this.config.format.from);
        return (v.length == 1 ? v[0] : v);
    };
    NouisliderComponent.prototype.writeValue = function (value) {
        if (this.slider) {
            this.slider.set(value);
        }
    };
    NouisliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NouisliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NouisliderComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled
            ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true')
            : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
    };
    NouisliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nouislider',
                    host: {
                        '[class.ng2-nouislider]': 'true'
                    },
                    template: '<div [attr.disabled]="disabled ? true : undefined"></div>',
                    styles: ["\n    :host {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n  "],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return NouisliderComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NouisliderComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
    ]; };
    NouisliderComponent.propDecorators = {
        'disabled': [{ type: core_1.Input },],
        'behaviour': [{ type: core_1.Input },],
        'connect': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'pageSteps': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'ngModel': [{ type: core_1.Input },],
        'keyboard': [{ type: core_1.Input },],
        'onKeydown': [{ type: core_1.Input },],
        'formControl': [{ type: core_1.Input },],
        'tooltips': [{ type: core_1.Input },],
        'change': [{ type: core_1.Output },],
        'update': [{ type: core_1.Output },],
        'slide': [{ type: core_1.Output },],
        'set': [{ type: core_1.Output },],
        'start': [{ type: core_1.Output },],
        'end': [{ type: core_1.Output },],
    };
    return NouisliderComponent;
}());
exports.NouisliderComponent = NouisliderComponent;
var NouisliderModule = (function () {
    function NouisliderModule() {
    }
    NouisliderModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    exports: [NouisliderComponent],
                    declarations: [NouisliderComponent],
                },] },
    ];
    /** @nocollapse */
    NouisliderModule.ctorParameters = function () { return []; };
    return NouisliderModule;
}());
exports.NouisliderModule = NouisliderModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdWlzbGlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBeUM7QUFDekMsc0NBV3VCO0FBQ3ZCLHdDQUl3QjtBQU94QjtJQUFBO0lBU0EsQ0FBQztJQVJDLDZCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsNkRBQTZEO1FBQzdELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDRDQUFnQjtBQVk3QjtJQTZCRSw2QkFBb0IsRUFBYyxFQUFVLFFBQW9CO1FBQWhFLGlCQUFxRTtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQWhCeEQsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQU1qQixXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxRQUFHLEdBQXNCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQTJHcEMsaUJBQVksR0FBRyxVQUFDLE9BQTBCLEVBQUUsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDdkcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQyxDQUFBO1FBRU8sc0JBQWlCLEdBQUcsVUFBQyxDQUFnQjtZQUMzQyxJQUFJLFFBQVEsR0FBVSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBZSxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLElBQUksVUFBVSxHQUFXLENBQUMsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLENBQUcsV0FBVztvQkFDbkIsVUFBVSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFHLFlBQVk7b0JBQ3BCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLEtBQUssQ0FBQztnQkFFUixLQUFLLEVBQUUsQ0FBRyxTQUFTO29CQUNqQixVQUFVLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLEtBQUssRUFBRSxDQUFDLENBQUUsVUFBVTtnQkFDcEIsS0FBSyxFQUFFLENBQUcsYUFBYTtvQkFDckIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBRVI7b0JBQ0UsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUVELEtBQUssR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLFFBQTJCLENBQUM7WUFFaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDaEMsQ0FBQztZQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTtJQTFLbUUsQ0FBQztJQUVyRSxzQ0FBUSxHQUFSO1FBQUEsaUJBOERDO1FBN0RDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDN0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUM7U0FDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSixZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUQsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVsRixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUN6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBRXJGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDN0IsQ0FBQztvQ0FDTyxNQUFNO2dCQUNaLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMvQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQSxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0gsQ0FBQzs7WUFWRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUExQixJQUFJLE1BQU0sU0FBQTt3QkFBTixNQUFNO2FBVWI7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsU0FBbUI7WUFDMUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFnQixFQUFFLE1BQWMsRUFBRSxTQUFtQjtZQUM1RSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzVFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLFNBQW1CO1lBQzFFLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUF4QixpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTCxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUc7d0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHO3FCQUNkO29CQUNELElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxNQUFnQjtRQUN2QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBbUI7UUFDbEMsVUFBVTtjQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO2NBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBb0VJLDhCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtxQkFDakM7b0JBQ0QsUUFBUSxFQUFFLDJEQUEyRDtvQkFDckUsTUFBTSxFQUFFLENBQUMsc0dBTVIsQ0FBQztvQkFDRixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLHlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRixFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsa0NBQWMsR0FBbUUsY0FBTSxPQUFBO1FBQzlGLEVBQUMsSUFBSSxFQUFFLGlCQUFVLEdBQUc7UUFDcEIsRUFBQyxJQUFJLEVBQUUsZ0JBQVMsR0FBRztLQUNsQixFQUg2RixDQUc3RixDQUFDO0lBQ0ssa0NBQWMsR0FBMkM7UUFDaEUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDN0IsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDL0IsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLEVBQUU7UUFDOUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7UUFDNUIsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBTSxFQUFFLEVBQUU7S0FDekIsQ0FBQztJQUNGLDBCQUFDO0NBM1BELEFBMlBDLElBQUE7QUEzUFksa0RBQW1CO0FBK1BoQztJQUFBO0lBVUEsQ0FBQztJQVZzQywyQkFBVSxHQUEwQjtRQUMzRSxFQUFFLElBQUksRUFBRSxlQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUM5QixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDcEMsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLCtCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsdUJBQUM7Q0FWRCxBQVVDLElBQUE7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoibm91aXNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBOZ01vZHVsZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUlxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm91aUZvcm1hdHRlciB7XG4gIHRvKHZhbHVlOiBudW1iZXIpOiBzdHJpbmc7XG4gIGZyb20odmFsdWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRGb3JtYXR0ZXIgaW1wbGVtZW50cyBOb3VpRm9ybWF0dGVyIHtcbiAgdG8odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gZm9ybWF0dGluZyB3aXRoIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NDYzMzY0LzQ3ODU4NFxuICAgIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdChwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkpLnRvRml4ZWQoMikpKTtcbiAgfTtcblxuICBmcm9tKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb3Vpc2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgc2xpZGVyOiBhbnk7XG4gIHB1YmxpYyBoYW5kbGVzOiBhbnlbXTtcbiAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgcHVibGljIGJlaGF2aW91cjogc3RyaW5nO1xuICAgcHVibGljIGNvbm5lY3Q6IGJvb2xlYW5bXTtcbiAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuICAgcHVibGljIG1pbjogbnVtYmVyO1xuICAgcHVibGljIG1heDogbnVtYmVyO1xuICAgcHVibGljIHN0ZXA6IG51bWJlcjtcbiAgIHB1YmxpYyBmb3JtYXQ6IE5vdWlGb3JtYXR0ZXI7XG4gICBwdWJsaWMgcGFnZVN0ZXBzOiBudW1iZXI7XG4gICBwdWJsaWMgY29uZmlnOiBhbnkgPSB7fTtcbiAgIHB1YmxpYyBuZ01vZGVsOiBudW1iZXIgfCBudW1iZXJbXTtcbiAgIHB1YmxpYyBrZXlib2FyZDogYm9vbGVhbjtcbiAgIHB1YmxpYyBvbktleWRvd246IGFueTtcbiAgIHB1YmxpYyBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICBwdWJsaWMgdG9vbHRpcHM6IEFycmF5PGFueT47XG4gICBwdWJsaWMgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG4gICBwdWJsaWMgc2xpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgIHB1YmxpYyBzdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgcHVibGljIGVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBwcml2YXRlIHZhbHVlOiBhbnk7XG4gIHByaXZhdGUgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyIDogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRzQ29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBiZWhhdmlvdXI6IHRoaXMuYmVoYXZpb3VyLFxuICAgICAgY29ubmVjdDogdGhpcy5jb25uZWN0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBzdGFydDogdGhpcy5mb3JtQ29udHJvbCAhPT0gdW5kZWZpbmVkID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6IHRoaXMubmdNb2RlbCxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIHBhZ2VTdGVwczogdGhpcy5wYWdlU3RlcHMsXG4gICAgICBrZXlib2FyZDogdGhpcy5rZXlib2FyZCxcbiAgICAgIG9uS2V5ZG93bjogdGhpcy5vbktleWRvd24sXG4gICAgICByYW5nZTogdGhpcy5jb25maWcucmFuZ2UgfHwge21pbjogdGhpcy5taW4sIG1heDogdGhpcy5tYXh9LFxuICAgIH0pKTtcbiAgICBpbnB1dHNDb25maWcudG9vbHRpcHMgPSB0aGlzLnRvb2x0aXBzIHx8IHRoaXMuY29uZmlnLnRvb2x0aXBzO1xuICAgIGlucHV0c0NvbmZpZy5mb3JtYXQgPSB0aGlzLmZvcm1hdCB8fCB0aGlzLmNvbmZpZy5mb3JtYXQgfHwgbmV3IERlZmF1bHRGb3JtYXR0ZXIoKTtcblxuICAgIHRoaXMuc2xpZGVyID0gbm9VaVNsaWRlci5jcmVhdGUoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JyksXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBpbnB1dHNDb25maWcpXG4gICAgKTtcblxuICAgIHRoaXMuaGFuZGxlcyA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub1VpLWhhbmRsZScpKTtcblxuICAgIGlmKHRoaXMuY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBpZih0aGlzLmNvbmZpZy5wYWdlU3RlcHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbmZpZy5wYWdlU3RlcHMgPSAxMDtcbiAgICAgIH1cbiAgICAgIGZvcihsZXQgaGFuZGxlIG9mIHRoaXMuaGFuZGxlcykge1xuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5vbktleWRvd24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5kZWZhdWx0S2V5SGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNvbmZpZy5vbktleWRvd24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zbGlkZXIub24oJ3NldCcsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5ldmVudEhhbmRsZXIodGhpcy5zZXQsIHZhbHVlcywgaGFuZGxlLCB1bmVuY29kZWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3VwZGF0ZScsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ2NoYW5nZScsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnRvVmFsdWVzKHZhbHVlcykpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zbGlkZXIub24oJ3NsaWRlJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcih0aGlzLnNsaWRlLCB2YWx1ZXMsIGhhbmRsZSwgdW5lbmNvZGVkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2xpZGVyLm9uKCdzdGFydCcsICh2YWx1ZXM6IHN0cmluZ1tdLCBoYW5kbGU6IG51bWJlciwgdW5lbmNvZGVkOiBudW1iZXJbXSkgPT4ge1xuICAgICAgdGhpcy5zdGFydC5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNsaWRlci5vbignZW5kJywgKHZhbHVlczogc3RyaW5nW10sIGhhbmRsZTogbnVtYmVyLCB1bmVuY29kZWQ6IG51bWJlcltdKSA9PiB7XG4gICAgICB0aGlzLmVuZC5lbWl0KHRoaXMudG9WYWx1ZXModmFsdWVzKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAodGhpcy5zbGlkZXIgJiYgKGNoYW5nZXMubWluIHx8IGNoYW5nZXMubWF4IHx8IGNoYW5nZXMuc3RlcCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNsaWRlci51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG1heDogdGhpcy5tYXhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0ZXA6IHRoaXMuc3RlcFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvVmFsdWVzKHZhbHVlczogc3RyaW5nW10pOiBhbnkgfCBhbnlbXSB7XG4gICAgbGV0IHYgPSB2YWx1ZXMubWFwKHRoaXMuY29uZmlnLmZvcm1hdC5mcm9tKTtcbiAgICByZXR1cm4gKHYubGVuZ3RoID09IDEgPyB2WzBdIDogdik7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZXIpIHtcbiAgICAgIHRoaXMuc2xpZGVyLnNldCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaXNEaXNhYmxlZFxuICAgICAgPyB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXSwgJ2Rpc2FibGVkJywgJ3RydWUnKVxuICAgICAgOiB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXSwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBwcml2YXRlIGV2ZW50SGFuZGxlciA9IChlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiwgdmFsdWVzOiBzdHJpbmdbXSwgaGFuZGxlOiBudW1iZXIsIHVuZW5jb2RlZDogbnVtYmVyW10pID0+IHtcbiAgICBsZXQgdiA9IHRoaXMudG9WYWx1ZXModmFsdWVzKTtcbiAgICBsZXQgZW1pdEV2ZW50cyA9IGZhbHNlO1xuICAgIGlmKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKEFycmF5LmlzQXJyYXkodikgJiYgdGhpcy52YWx1ZVtoYW5kbGVdICE9IHZbaGFuZGxlXSkge1xuICAgICAgZW1pdEV2ZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGlmKCFBcnJheS5pc0FycmF5KHYpICYmIHRoaXMudmFsdWUgIT0gdikge1xuICAgICAgZW1pdEV2ZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGlmKGVtaXRFdmVudHMpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdCh2KTtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICAgIGlmKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgIHRoaXMudmFsdWVbaGFuZGxlXSA9IHZbaGFuZGxlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHY7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0S2V5SGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgbGV0IHN0ZXBTaXplOiBhbnlbXSA9IHRoaXMuc2xpZGVyLnN0ZXBzKCk7XG4gICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoKDxIVE1MRWxlbWVudD5lLnRhcmdldCkuZ2V0QXR0cmlidXRlKCdkYXRhLWhhbmRsZScpKTtcbiAgICBsZXQgc2lnbiA9IDE7XG4gICAgbGV0IG11bHRpcGxpZXI6IG51bWJlciA9IDE7XG4gICAgbGV0IHN0ZXAgPSAwO1xuICAgIGxldCBkZWx0YSA9IDA7XG5cbiAgICBzd2l0Y2ggKCBlLndoaWNoICkge1xuICAgICAgY2FzZSAzNDogIC8vIFBhZ2VEb3duXG4gICAgICAgIG11bHRpcGxpZXIgPSB0aGlzLmNvbmZpZy5wYWdlU3RlcHM7XG4gICAgICBjYXNlIDQwOiAgLy8gQXJyb3dEb3duXG4gICAgICBjYXNlIDM3OiAgLy8gQXJyb3dMZWZ0XG4gICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgc3RlcCA9IHN0ZXBTaXplW2luZGV4XVswXTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzMzogIC8vIFBhZ2VVcFxuICAgICAgICBtdWx0aXBsaWVyID0gdGhpcy5jb25maWcucGFnZVN0ZXBzO1xuICAgICAgY2FzZSAzODogIC8vIEFycm93VXBcbiAgICAgIGNhc2UgMzk6ICAvLyBBcnJvd1JpZ2h0XG4gICAgICAgIHN0ZXAgPSBzdGVwU2l6ZVtpbmRleF1bMV07XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhID0gc2lnbiAqIG11bHRpcGxpZXIgKiBzdGVwO1xuICAgIGxldCBuZXdWYWx1ZTogbnVtYmVyIHwgbnVtYmVyW107XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IFtdLmNvbmNhdCh0aGlzLnZhbHVlKTtcbiAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IG5ld1ZhbHVlW2luZGV4XSArIGRlbHRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMudmFsdWUgKyBkZWx0YTtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci5zZXQobmV3VmFsdWUpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnbm91aXNsaWRlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm5nMi1ub3Vpc2xpZGVyXSc6ICd0cnVlJ1xuICB9LFxuICB0ZW1wbGF0ZTogJzxkaXYgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkXCI+PC9kaXY+JyxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICBgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3Vpc2xpZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogUmVuZGVyZXIyLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nZGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nYmVoYXZpb3VyJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Nvbm5lY3QnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbGltaXQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nbWluJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ21heCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidzdGVwJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1hdCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidwYWdlU3RlcHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nY29uZmlnJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ25nTW9kZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4na2V5Ym9hcmQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25LZXlkb3duJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Zvcm1Db250cm9sJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3Rvb2x0aXBzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2NoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzbGlkZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc2V0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzdGFydCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nZW5kJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cblxuXG5leHBvcnQgY2xhc3MgTm91aXNsaWRlck1vZHVsZSB7IHN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW05vdWlzbGlkZXJDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3Vpc2xpZGVyQ29tcG9uZW50XSxcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/ngx-chips/esm5/ngx-chips.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-chips/esm5/ngx-chips.js ***!
  \**************************************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, ɵb, ɵa, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'highlight'
            },] },
];
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    DragProvider.prototype.getDraggedItem = function (event) {
        var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        return (JSON.parse(data));
    };
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var defaults = {
    tagInput: ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    }),
    dropdown: ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    })
};
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults;
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled }, this.validators, this.asyncValidators)
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"] && !changes["disabled"].firstChange) {
            if (changes["disabled"].currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return (this.form.get('item'));
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        var _b = this.form, dirty = _b.dirty, value = _b.value, valid = _b.valid;
        return dirty && value.item && !valid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-form',
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"],
                template: "<!-- form -->\n<form (submit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n\n           [(ngModel)]=\"inputText\"\n           [formControlName]=\"'item'\"\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n</form>\n"
            },] },
];
TagInputForm.propDecorators = {
    "onSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var defaults$1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults$1().offset;
        this.focusFirstElement = new defaults$1().focusFirstElement;
        this.showDropdownIfEmpty = new defaults$1().showDropdownIfEmpty;
        this.minimumTextLength = new defaults$1().minimumTextLength;
        this.limitItemsTo = new defaults$1().limitItemsTo;
        this.displayBy = new defaults$1().displayBy;
        this.identifyBy = new defaults$1().identifyBy;
        this.matchingFn = new defaults$1().matchingFn;
        this.appendToBody = new defaults$1().appendToBody;
        this.keepOpen = new defaults$1().keepOpen;
        this.dynamicUpdate = new defaults$1().dynamicUpdate;
        this.zIndex = new defaults$1().zIndex;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var tag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
                else if (!_this.showDropdownIfEmpty) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
                var _b;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_b = {}, _b[this.tagInput.displayBy] = display, _b[this.tagInput.identifyBy] = value, _b));
        var _b;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
            var _b;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            },] },
];
TagInputDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
]; };
TagInputDropdown.propDecorators = {
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"],] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
    "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showDropdownIfEmpty": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteObservable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "minimumTextLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "limitItemsTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "matchingFn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "keepOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:scroll',] },],
    "onWindowBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:blur',] },],
};
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('ink', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('none => clicked', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
TagRipple.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var KeyboardEvent = ((window)).KeyboardEvent;
var MouseEvent = ((window)).MouseEvent;
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editing = false;
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== 'string' && this.model["readonly"] === true;
        },
        enumerable: true,
        configurable: true
    });
    
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === 'string' ? value : Object.assign({}, this.model, (_b = {}, _b[this.displayBy] = value, _b));
        this.onBlur.emit(result);
        var _b;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (tag) {
            return typeof tag === 'string' ?
                tag === input :
                tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === 'string' ? input : (_b = {}, _b[this.identifyBy] = hasId() ? this.model[this.identifyBy] : input, _b[this.displayBy] = input, _b);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
        var _b;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag',
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            },] },
];
TagComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
TagComponent.propDecorators = {
    "model": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hasRipple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "canAddTag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.moving',] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagRipple,] },],
    "keydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] },],
};
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ enter }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ leave }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
var DragEvent = ((window)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults$2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        _this.separatorKeys = new defaults$2().separatorKeys;
        _this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
        _this.placeholder = new defaults$2().placeholder;
        _this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
        _this.maxItems = new defaults$2().maxItems;
        _this.validators = new defaults$2().validators;
        _this.asyncValidators = new defaults$2().asyncValidators;
        _this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
        _this.errorMessages = new defaults$2().errorMessages;
        _this.theme = new defaults$2().theme;
        _this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
        _this.inputId = new defaults$2().inputId;
        _this.inputClass = new defaults$2().inputClass;
        _this.clearOnBlur = new defaults$2().clearOnBlur;
        _this.hideForm = new defaults$2().hideForm;
        _this.addOnBlur = new defaults$2().addOnBlur;
        _this.addOnPaste = new defaults$2().addOnPaste;
        _this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
        _this.blinkIfDupe = new defaults$2().blinkIfDupe;
        _this.removable = new defaults$2().removable;
        _this.editable = new defaults$2().editable;
        _this.allowDupes = new defaults$2().allowDupes;
        _this.modelAsStrings = new defaults$2().modelAsStrings;
        _this.trimTags = new defaults$2().trimTags;
        _this.ripple = new defaults$2().ripple;
        _this.tabindex = new defaults$2().tabIndex;
        _this.disable = new defaults$2().disable;
        _this.dragZone = new defaults$2().dragZone;
        _this.onRemoving = new defaults$2().onRemoving;
        _this.onAdding = new defaults$2().onAdding;
        _this.animationDuration = new defaults$2().animationDuration;
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.isLoading = false;
        _this.listeners = (_b = {}, _b[KEYDOWN] = ([]), _b[KEYUP] = ([]), _b);
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.inputTextValue = '';
        _this.errors = [];
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_b = {}, _b[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _b[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _b));
            var _b;
        };
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                !dupe || _this.allowDupes === true,
                _this.maxItemsReached === false,
                ((isFromAutocomplete) || _this.onlyFromAutocomplete === false)
            ];
            return assertions.filter(function (item) { return item; }).length === assertions.length;
        };
        _this.onPasteCallback = function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            var getText, text, requests, resetInput;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                getText = function () {
                    var isIE = Boolean(((window)).clipboardData);
                    var clipboardData = isIE ? (((window)).clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
        var _b;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item["readonly"];
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a_1 = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        control.setValue(value, {
            emitEvent: emitEvent
        });
    };
    TagInputComponent.prototype.getControl = function () {
        return (this.inputForm.value);
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.updateEditedTag = function (_b) {
        var tag = _b.tag, index = _b.index;
        this.onTagEdited.emit(tag);
    };
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(display);
        }
        return new Promise(function (resolve, reject) {
            var reset = function () {
                _this.setInputValue('');
                _this.focus(true, false);
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        listen.call(this, KEYDOWN, listener);
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;-webkit-transition:all .3s;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations: animations
            },] },
];
TagInputComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    "separatorKeys": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "separatorKeyCodes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "secondaryPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onlyFromAutocomplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "errorMessages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "theme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onTextChangeDebounce": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pasteSplitPattern": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blinkIfDupe": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowDupes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "modelAsStrings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "trimTags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dragZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onRemoving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animationDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onValidationError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [TagInputDropdown,] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false },] },],
    "inputForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagInputForm,] },],
    "tags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [TagComponent,] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "tabindexAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] },],
};
var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;-webkit-transition:all .15s;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            },] },
];
var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            },] },
];


//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.js":
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 11.1.0 - 2018-04-02 11:18:13 */

(function (factory) {

    if ( true ) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else {}

}(function( ){

	'use strict';

	var VERSION = '11.1.0';


	function isValidFormatter ( entry ) {
		return typeof entry === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement ( el ) {
		el.parentElement.removeChild(el);
	}

	function isSet ( value ) {
		return value !== null && value !== undefined;
	}

	// Bindable version
	function preventDefault ( e ) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( doc ) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((doc.compatMode || "") === "CSS1Compat");
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive ( ) {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);

		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone ( ) {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct );
		var va = xVal[j-1];
		var vb = xVal[j];
		var pa = xPct[j-1];
		var pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct );
		var a = xPct[j-1];
		var b = xPct[j];

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( !Array.isArray(value) ){
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i+1]], n) / subRangeRatio(that.xPct[i], that.xPct[i+1]);

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	function Spectrum ( entry, snap, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index;
		var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && ((value / step) % 1) !== 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function validateFormat ( entry ) {

		// Any object with a to and from method is supported.
		if ( isValidFormatter(entry) ) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		// Map legacy options
		if ( entry === 'lower' ) {
			entry = [true, false];
		}

		else if ( entry === 'upper' ) {
			entry = [false, true];
		}

		// Handle boolean options
		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding ( parsed, entry ) {

		if ( !isNumeric(entry) && !Array.isArray(entry) ){
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1])) ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
		}

		if ( entry === 0 ) {
			return;
		}

		if ( !Array.isArray(entry) ) {
			entry = [entry, entry];
		}

		// 'getMargin' returns false for invalid values.
		parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];

		if ( parsed.padding[0] === false || parsed.padding[1] === false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if ( parsed.padding[0] < 0 || parsed.padding[1] < 0 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
		}

		if ( parsed.padding[0] + parsed.padding[1] >= 100 ) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat ( parsed, entry ) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat ( parsed, entry ) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix ( parsed, entry ) {

		if ( typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( typeof entry !== 'object' ) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: true, t: testCssPrefix },
			'cssClasses': { r: true, t: testCssClasses }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				connects: 'connects',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			}
		};

		// AriaFormat defaults to regular format, if any.
		if ( options.format && !options.ariaFormat ) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( !isSet(options[name]) && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, !isSet(options[name]) ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		// All recent browsers accept unprefixed transform.
		// We need -ms- for IE9 and -webkit- for older Android;
		// Assume use of -webkit- if unprefixed and -ms- are not supported.
		// https://caniuse.com/#feat=transforms2d
		var d = document.createElement("div");
		var msPrefix = d.style.msTransform !== undefined;
		var noPrefix = d.style.transform !== undefined;

		parsed.transformRule = noPrefix ? 'transform' : (msPrefix ? 'msTransform' : 'webkitTransform');

		// Pips don't move, so we can place them using left/top.
		var styles = [['left', 'top'], ['right', 'bottom']];

		parsed.style = styles[parsed.dir][parsed.ort];

		return parsed;
	}


function scope ( target, options, originalOptions ){

	var actions = getActions();
	var supportsTouchActionNone = getSupportsTouchActionNone();
	var supportsPassive = supportsTouchActionNone && getSupportsPassive();

	// All variables local to 'scope' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_ActiveHandlesCount = 0;
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;
	var scope_Pips;
	var scope_Document = target.ownerDocument;
	var scope_DocumentElement = scope_Document.documentElement;
	var scope_Body = scope_Document.body;


	// For horizontal sliders in standard ltr documents,
	// make .noUi-origin overflow to the left so the document doesn't scroll.
	var scope_DirOffset = (scope_Document.dir === 'rtl') || (options.ort === 1) ? 0 : 100;

/*! In this file: Construction of DOM elements; */

	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( addTarget, className ) {

		var div = scope_Document.createElement('div');

		if ( className ) {
			addClass(div, className);
		}

		addTarget.appendChild(div);

		return div;
	}

	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {

		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);

		handle.setAttribute('data-handle', handleNumber);

		// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
		// 0 = focusable and reachable
		handle.setAttribute('tabindex', '0');
		handle.setAttribute('role', 'slider');
		handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

		if ( handleNumber === 0 ) {
			addClass(handle, options.cssClasses.handleLower);
		}

		else if ( handleNumber === options.handles - 1 ) {
			addClass(handle, options.cssClasses.handleUpper);
		}

		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		var connectBase = addNodeTo(base, options.cssClasses.connects);

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(connectBase, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( addTarget ) {

		// Apply classes and data to the target.
		addClass(addTarget, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(addTarget, options.cssClasses.ltr);
		} else {
			addClass(addTarget, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(addTarget, options.cssClasses.horizontal);
		} else {
			addClass(addTarget, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(addTarget, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function aria ( ) {

		bindEvent('update', function ( values, handleNumber, unencoded, tap, positions ) {

			// Update Aria Values for all handles, as a change in one changes min and max values for the next.
			scope_HandleNumbers.forEach(function( index ){

				var handle = scope_Handles[index];

				var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
				var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

				var now = positions[index];
				var text = options.ariaFormat.to(unencoded[index]);

				handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
				handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
				handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
				handle.children[0].setAttribute('aria-valuetext', text);
			});
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			if ( values < 2 ) {
				throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
			}

			// Divide 0 - 100 in 'count' parts.
			var interval = values - 1;
			var spread = ( 100 / interval );

			values = [];

			// List these parts and have them handled as 'positions'.
			while ( interval-- ) {
				values[ interval ] = ( interval * spread );
			}

			values.push(100);

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {};
		var firstInRange = scope_Spectrum.xVal[0];
		var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1];
		var ignoreFirst = false;
		var ignoreLast = false;
		var prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step;
			var i;
			var q;
			var low = current;
			var high = group[index+1];
			var newPct;
			var pctDifference;
			var pctPos;
			var type;
			var steps;
			var realSteps;
			var stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the amount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = scope_Document.createElement('div');

		var valueSizeClasses = [
			options.cssClasses.valueNormal,
			options.cssClasses.valueLarge,
			options.cssClasses.valueSub
		];
		var markerSizeClasses = [
			options.cssClasses.markerNormal,
			options.cssClasses.markerLarge,
			options.cssClasses.markerSub
		];
		var valueOrientationClasses = [
			options.cssClasses.valueHorizontal,
			options.cssClasses.valueVertical
		];
		var markerOrientationClasses = [
			options.cssClasses.markerHorizontal,
			options.cssClasses.markerVertical
		];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value;
			var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
			var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.value);
				node.setAttribute('data-value', values[0]);
				node.style[options.style] = offset + '%';
				node.innerText = formatter.to(values[0]);
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		return element;
	}

	function removePips ( ) {
		if ( scope_Pips ) {
			removeElement(scope_Pips);
			scope_Pips = null;
		}
	}

	function pips ( grid ) {

		// Fix #669
		removePips();

		var mode = grid.mode;
		var density = grid.density || 1;
		var filter = grid.filter || false;
		var values = grid.values || false;
		var stepped = grid.stepped || false;
		var group = getGroup( mode, values, stepped );
		var spread = generateSpread( density, mode, group );
		var format = grid.format || {
			to: Math.round
		};

		scope_Pips = scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));

		return scope_Pips;
	}

/*! In this file: Browser events (not slider events like slide, change); */

	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect();
		var alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			e = fixEvent(e, data.pageOffset, data.target || element);

			// fixEvent returns false if this event has a different target
			// when handling (multi-) touch events;
			if ( !e ) {
				return false;
			}

			// doNotReject is passed by all end events to make sure released touches
			// are not rejected, leaving the slider "stuck" to the cursor;
			if ( scope_Target.hasAttribute('disabled') && !data.doNotReject ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
			// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
			// touch-action: manipulation, but that allows panning, which breaks
			// sliders after zooming/on non-responsive pages.
			// See: https://bugs.webkit.org/show_bug.cgi?id=133112
			if ( !supportsPassive ) {
				e.preventDefault();
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset, eventTarget ) {

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0;
		var mouse = e.type.indexOf('mouse') === 0;
		var pointer = e.type.indexOf('pointer') === 0;

		var x;
		var y;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		// In the event that multitouch is activated, the only thing one handle should be concerned
		// about is the touches that originated on top of it.
		if ( touch ) {

			// Returns true if a touch originated on the target.
			var isTouchOnTarget = function (checkTouch) {
				return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
			};

			// In the case of touchstart events, we need to make sure there is still no more than one
			// touch on the target so we look amongst all touches.
			if (e.type === 'touchstart') {

				var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

				// Do not support more than one touch per handle.
				if ( targetTouches.length > 1 ) {
					return false;
				}

				x = targetTouches[0].pageX;
				y = targetTouches[0].pageY;

			} else {

				// In the other cases, find on changedTouches is enough.
				var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

				// Cancel if the target touch has not moved.
				if ( !targetTouch ) {
					return false;
				}

				x = targetTouch.pageX;
				y = targetTouch.pageY;
			}
		}

		pageOffset = pageOffset || getPageOffset(scope_Document);

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		e.pageOffset = pageOffset;
		e.points = [x, y];
		e.cursor = mouse || pointer; // Fix #435

		return e;
	}

	// Translate a coordinate in the document to a percentage on the slider
	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();

		// Clamp proposal between 0% and 100%
		// Out-of-bound coordinates may occur when .noUi-base pseudo-elements
		// are used (e.g. contained handles feature)
		proposal = limit(proposal);

		return options.dir ? 100 - proposal : proposal;
	}

	// Find handle closest to a certain percentage on the slider
	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest || (pos === 100 && closest === 100) ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		if ( data.handle ) {
			removeClass(data.handle, options.cssClasses.active);
			scope_ActiveHandlesCount -= 1;
		}

		// Unbind the move and end events, which are added on 'start'.
		data.listeners.forEach(function( c ) {
			scope_DocumentElement.removeEventListener(c[0], c[1]);
		});

		if ( scope_ActiveHandlesCount === 0 ) {
			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);
			setZindex();

			// Remove cursor styles and text-selection events bound to the body.
			if ( event.cursor ) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('change', handleNumber);
			fireEvent('set', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		var handle;
		if ( data.handleNumbers.length === 1 ) {

			var handleOrigin = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handleOrigin.hasAttribute('disabled') ) {
				return false;
			}

			handle = handleOrigin.children[0];
			scope_ActiveHandlesCount += 1;

			// Mark the handle as 'active' so it can be styled.
			addClass(handle, options.cssClasses.active);
		}

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Record the event listeners.
		var listeners = [];

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
			// The event target has changed so we need to propagate the original one so that we keep
			// relying on it to extract target touches.
			target: event.target,
			handle: handle,
			listeners: listeners,
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
			target: event.target,
			handle: handle,
			listeners: listeners,
			doNotReject: true,
			handleNumbers: data.handleNumbers
		});

		// We want to make sure we pushed the listeners in the listener list rather than creating
		// a new one as it has already been passed to the event handlers.
		listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			scope_Body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			// Prevent text selection when dragging the handles.
			// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
			// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
			// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
			// The 'cursor' flag is false.
			// See: http://caniuse.com/#search=selectstart
			scope_Body.addEventListener('selectstart', preventDefault, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('update', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('set', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}

/*! In this file: Slider events (not browser events); */

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0];
		var namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0];
			var tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}

/*! In this file: Mechanics for slider operation */

	function toPct ( pct ) {
		return pct + '%';
	}

	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward, getValue ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		// The padding option keeps the handles a certain distance from the
		// edges of the slider. Padding must be > 0.
		if ( options.padding ) {

			if ( handleNumber === 0 ) {
				to = Math.max(to, options.padding[0]);
			}

			if ( handleNumber === scope_Handles.length - 1 ) {
				to = Math.min(to, 100 - options.padding[1]);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] && !getValue ) {
			return false;
		}

		return to;
	}

	// Uses slider orientation to create CSS rules. a = base value;
	function inRuleOrder ( v, a ) {
		var o = options.ort;
		return (o?a:v) + ', ' + (o?v:a);
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// Takes a base value and an offset. This offset is used for the connect bar size.
	// In the initial design for this feature, the origin element was 1% wide.
	// Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
	// in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
	function transformDirection ( a, b ) {
		return options.dir ? 100 - a - b : a;
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		var rule = 'translate(' + inRuleOrder(toPct(transformDirection(to, 0) - scope_DirOffset), '0') + ')';
		scope_Handles[handleNumber].style[options.transformRule] = rule;

		updateConnect(handleNumber);
		updateConnect(handleNumber + 1);
	}

	// Handles before the slider middle are stacked later = higher,
	// Handles after the middle later is lower
	// [[7] [8] .......... | .......... [5] [4]
	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		// We use two rules:
		// 'translate' to change the left/top offset;
		// 'scale' to change the width of the element;
		// As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
		var connectWidth = h - l;
		var translateRule = 'translate(' + inRuleOrder(toPct(transformDirection(l, connectWidth)), '0') + ')';
		var scaleRule = 'scale(' + inRuleOrder(connectWidth / 100, '1') + ')';

		scope_Connects[index].style[options.transformRule] = translateRule + ' ' + scaleRule;
	}

/*! In this file: All methods eventually exposed in slider.noUiSlider... */

	// Parses value passed to .set method. Returns current value if not parse-able.
	function resolveToValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false || to === undefined ) {
			return scope_Locations[handleNumber];
		}

		// If a formatted number was passed, attempt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);
		to = scope_Spectrum.toStepping(to);

		// If parsing the number failed, use the current value.
		if ( to === false || isNaN(to) ) {
			return scope_Locations[handleNumber];
		}

		return to;
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// First pass, without lookAhead but with lookBackward. Values are set from left to right.
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
		});

		// Second pass. Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, true);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	// Reset slider to initial values
	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}


			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}


			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Updateable: margin, limit, padding, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		scope_Spectrum = newOptions.spectrum;

		// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;
		options.padding = newOptions.padding;

		// Update pips, removes existing.
		if ( options.pips ) {
			pips(options.pips);
		}

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

/*! In this file: Calls to functions. All other scope_ files define functions only; */

	// Create the base element, initialize HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		// Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		removePips: removePips,
		pips: pips // Issue #594
	};

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	aria();

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target || !target.nodeName ) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Throw an error if the slider was already initialized.
		if ( target.noUiSlider ) {
			throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = scope( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expandability;
	return {
		version: VERSION,
		create: initialize
	};

}));

/***/ }),

/***/ "./src/app/components/bootstrap/accordion/accordion.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/accordion/accordion.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Accordion Starts-->\r\n<section id=\"accordion\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Accordion</div>\r\n      <p class=\"content-sub-header\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-3\">Collapsible Accordion</h4>\r\n      <!--Collapsible Accordion Starts-->\r\n      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n        <ngb-panel title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel>\r\n          <ng-template ngbPanelTitle>\r\n            <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--Collapsible Accordion Ends-->      \r\n    </div>\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-3\">One open panel at a time</h4>\r\n      <!--One open panel at a time Starts-->\r\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"1\">\r\n        <ngb-panel id=\"1\" title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\">\r\n          <ng-template ngbPanelTitle>\r\n            <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n          </ng-template>\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"3\" title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--One open panel at a time Ends-->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-5\">Toggle panels</h4>\r\n      <!--Toggle panels Starts-->\r\n      <ngb-accordion #acc=\"ngbAccordion\">\r\n        <ngb-panel id=\"1\" title=\"First panel\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\" title=\"Second\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <p class=\"mt-2\">\r\n        <button class=\"btn btn-secondary\" (click)=\"acc.toggle('1')\">Toggle first</button>\r\n        <button class=\"btn btn-secondary\" (click)=\"acc.toggle('2')\">Toggle second</button>\r\n      </p>\r\n      <!--Toggle panels Ends-->      \r\n    </div>\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <h4 class=\"mt-5\">Prevent panel toggle</h4>\r\n      <!--Prevent panel toggle starts-->\r\n      <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n        <ngb-panel id=\"1\" title=\"Simple\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"2\" title=\"I can't be toggled...\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n        <ngb-panel id=\"3\" title=\"I can be opened, but not closed...\">\r\n          <ng-template ngbPanelContent>\r\n            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh\r\n            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\r\n            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't\r\n            heard of them accusamus labore sustainable VHS.</p>\r\n          </ng-template>\r\n        </ngb-panel>\r\n      </ngb-accordion>\r\n      <!--Prevent panel toggle ends-->\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Accordion Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/accordion/accordion.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/accordion/accordion.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/accordion/accordion.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/accordion/accordion.component.ts ***!
  \***********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    // Prevent panel toggle code
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === '2') {
            $event.preventDefault();
        }
        if ($event.panelId === '3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ;
    AccordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/components/bootstrap/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.scss */ "./src/app/components/bootstrap/accordion/accordion.component.scss")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/alerts/alerts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/alerts/alerts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"alert\">\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Alerts</div>\r\n            <p class=\"content-sub-header\">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>\r\n        </div>\r\n    </div>\r\n    <!--Alert States Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Alert States</h4>\r\n                    <p>Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes (e.g., <code>.alert-COLOR</code>) for basic colored alert messages.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-alert type=\"primary\" [dismissible]=\"false\">\r\n                            <strong>Primary!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"secondary\" [dismissible]=\"false\">\r\n                            <strong>Secondary!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n                            <strong>Success!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"danger\" [dismissible]=\"false\">\r\n                            <strong>Danger!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"info\" [dismissible]=\"false\">\r\n                            <strong>Info!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert [dismissible]=\"false\">\r\n                            <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"light\" [dismissible]=\"false\">\r\n                            <strong>Light!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                        <ngb-alert type=\"dark\" [dismissible]=\"false\">\r\n                            <strong>Dark!</strong> Better check yourself, you're not looking too good.\r\n                        </ngb-alert>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Alert States Ends-->\r\n    \r\n    <!--Closable Alert Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Closable Alert</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div *ngFor=\"let alert of alerts\">\r\n                            <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n                        </div>\r\n                        <p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-raised\" (click)=\"reset()\">Reset</button>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Closable Alert Ends-->\r\n    \r\n    <!--Self-Closing Alert Section starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Self-Closing Alert</h4>\r\n                    <p>Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n\r\n                        <hr/>\r\n\r\n                        <p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n                        <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\r\n                        <p>\r\n                            <button class=\"btn btn-primary btn-raised\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Self-Closing Alert Section Ends-->\r\n    \r\n    <!--Custom Alert Starts-->\r\n    <div class=\"row match-height\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Custom Alert</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--Custom Alert Ends-->    \r\n</section>"

/***/ }),

/***/ "./src/app/components/bootstrap/alerts/alerts.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/alerts/alerts.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/alerts/alerts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/alerts/alerts.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsComponent = /** @class */ (function () {
    // Closable Alert's code
    function AlertsComponent() {
        this.alerts = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is a success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        }, {
            id: 5,
            type: 'primary',
            message: 'This is a primary alert',
        }, {
            id: 6,
            type: 'secondary',
            message: 'This is a secondary alert',
        }, {
            id: 7,
            type: 'light',
            message: 'This is a light alert',
        }, {
            id: 8,
            type: 'dark',
            message: 'This is a dark alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    // Close Alert on close icon click
    AlertsComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    // Reset all the alerts on click of reset button
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Auto close alert timer
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        // Success message
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        // Subscribe section code
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    // Self closing alert's message change code
    AlertsComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsComponent.prototype, "alerts", void 0);
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/components/bootstrap/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.scss */ "./src/app/components/bootstrap/alerts/alerts.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/badges/badges.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/badges/badges.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic Badges Starts-->\r\n<section id=\"basic-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Badges</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Primary Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Primary, colored badge use <code>.badge-primary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-primary\">Primary</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Secondary Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Secondary, colored badge use <code>.badge-secondary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-secondary\">Secondary</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Success Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Success, colored badge use <code>.badge-success</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-success\">Success</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Danger Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Danger, colored badge use <code>.badge-danger</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-danger\">Danger</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Info Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Info, colored badge use <code>.badge-info</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-info\">Info</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Warning Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Warning, colored badge use <code>.badge-warning</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-warning\">Warning</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Light Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Light, colored badge use <code>.badge-light</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-light\">Light</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Dark Badge</h4>\r\n                    <p>Use <code>.badge</code> class to get badge. For Dark, colored badge use <code>.badge-dark</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-dark\">Dark</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic Badges Starts-->\r\n\r\n<!--Badge With Components Starts-->\r\n<section id=\"component-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Badge With Components</div>\r\n            <p class=\"content-sub-header\">Easily highlight new or unread items by adding a <code>&lt;span class=\"badge\"&gt;</code> to links, Bootstrap navs, and more.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badge with Link</h4>\r\n                    <p>Use badge class in anchor tag for badge with link.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <a>Inbox <span class=\"badge badge-secondary\">42</span></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badge with button</h4>\r\n                    <p>Use badge class in button tag for badge with button.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <button class=\"btn btn-danger btn-raised\" type=\"button\">\r\n                            Messages <span class=\"badge badge-light\">4</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Adapts to active nav states</h4>\r\n                    <p>Built-in styles are included for placing badges in active states in pill navigations.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link active\">Home <span class=\"badge badge-success\">42</span></a></li>\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\">Profile</a></li>\r\n                            <li role=\"presentation\" class=\"nav-item\"><a class=\"nav-link\">Messages <span class=\"badge badge-warning\">3</span></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Badge With Components Starts-->\r\n\r\n<!--Pill Badges Starts-->\r\n<section id=\"pill-badges\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Pill Badges</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Primary Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Primary, colored badge use <code>.badge-primary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-primary\">25</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Secondary Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Secondary, colored badge use <code>.badge-secondary</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-secondary\">85</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Success Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Success, colored badge use <code>.badge-success</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-success\">41</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Danger Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Danger, colored badge use <code>.badge-danger</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-danger\">36</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Info Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Info, colored badge use <code>.badge-info</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-info\">77</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Warning Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Warning, colored badge use <code>.badge-warning</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-warning\">30</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Light Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Light, colored badge use <code>.badge-light</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-light\">45</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-md-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Dark Badge</h4>\r\n                    <p>Use <code>.badge-pill</code> class to get badge pill. For Dark, colored badge use <code>.badge-dark</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <span class=\"badge badge-pill badge-dark\">37</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Pill Badges Starts-->"

/***/ }),

/***/ "./src/app/components/bootstrap/badges/badges.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/badges/badges.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/badges/badges.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/badges/badges.component.ts ***!
  \*****************************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badges',
            template: __webpack_require__(/*! ./badges.component.html */ "./src/app/components/bootstrap/badges/badges.component.html"),
            styles: [__webpack_require__(/*! ./badges.component.scss */ "./src/app/components/bootstrap/badges/badges.component.scss")]
        })
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/buttons/buttons.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/buttons/buttons.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic button starts -->\r\n<section id=\"buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Buttons</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Flat Buttons Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Flat Buttons</h4>\r\n                    <p>Use class <code>.btn-flat</code> for flat buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">Primary</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-success\">Success</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-info\">Info</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-warning\">Warning</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-danger\">Danger</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-link\">Link</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Buttons Ends -->\r\n\r\n        <!--Flat Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-primary btn-flat\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-flat\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-flat\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-flat\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-flat\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Button Group Ends -->\r\n        \r\n        <!--Raised Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Raised buttons</h4>\r\n                    <p>Use <code>.btn-raised</code> class for raised buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised active\"><code>.active</code></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Danger</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-link\">Link</a>\r\n                        </p>\r\n                        <h4>Buttons with Shadow <code>.shadow-z-2</code></h4>\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised shadow-z-2 btn-danger\">Danger</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Button Ends -->\r\n        \r\n        <!--Raised Gradient Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Gradient Raised buttons</h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-purple-bliss white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-purple-bliss</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-mint white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-mint</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-pomegranate white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-pomegranate</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-crystal-clear white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-crystal-clear</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-ibiza-sunset white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-ibiza-sunset</span>\r\n                                </div>\r\n                                <div class=\"mb-3\"> \r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-nepal white\">Button</a> \r\n                                    <span class=\"ml-2\">.gradient-nepal</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-12\">\r\n                        <div class=\"card-header\">\r\n                            <h4 class=\"card-title\">Gradient Raised Button With Shadow</h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-purple-bliss white shadow-z-1-hover\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-z-1-hover</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-mint white shadow-z-4\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-z-4</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-pomegranate white big-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.big-shadow</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-crystal-clear white shadow-big-navbar\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.shadow-big-navbar</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-ibiza-sunset white sidebar-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.sidebar-shadow</span>\r\n                                </div>\r\n                                <div class=\"mb-3\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised gradient-nepal white card-shadow\">Buttons with Shadow</a>\r\n                                    <span class=\"ml-2\">.card-shadow</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Gradient Button Ends -->\r\n\r\n        <!--Raised Round Button Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Raised buttons</h4>\r\n                    <p>Use <code>.btn-round</code> class with <code>.btn-raised</code> for raised round buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-secondary\">Secondary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-danger\">Danger</a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Round Button Ends -->\r\n\r\n        <!--Raised Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-secondary btn-raised mr-1\" id=\"dropdownRaised1\" ngbDropdownToggle>Secondary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownRaised1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-primary btn-raised mr-1\" id=\"dropdownRaised2\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-raised mr-1\" id=\"dropdownRaised3\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-raised mr-1\" id=\"dropdownRaised4\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-raised mr-1\" id=\"dropdownRaised5\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-raised mr-1\" id=\"dropdownRaised6\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaised6\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Button Group Ends -->\r\n        \r\n        <!--Raised Round Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-secondary btn-raised btn-round mr-1\" id=\"dropdownRaisedRound1\" ngbDropdownToggle>Secondary</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownRaisedRound1\">\r\n                                <button class=\"dropdown-item\">Action</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-primary btn-raised btn-round mr-1\" id=\"dropdownRaisedRound2\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound2\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-success btn-raised btn-round mr-1\" id=\"dropdownRaisedRound3\" ngbDropdownToggle>Success</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound3\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-danger btn-raised btn-round mr-1\" id=\"dropdownRaisedRound4\" ngbDropdownToggle>Danger</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound4\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-info btn-raised btn-round mr-1\" id=\"dropdownRaisedRound5\" ngbDropdownToggle>Info</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound5\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                            <span ngbDropdown>\r\n                                <button class=\"btn btn-warning btn-raised btn-round mr-1\" id=\"dropdownRaisedRound6\" ngbDropdownToggle>Warning</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownRaisedRound6\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Raised Round Button Group Ends -->\r\n\r\n        <!--Disabled Button Group Starts -->\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Disabled Button</h4>\r\n                    <p>For Flat buttons <code>.btn-flat</code> and for raised buttons <code>.btn-raised</code> class needed</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <fieldset disabled>\r\n                            <p>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\"><code>btn</code> only</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">Primary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-success\">Success</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-info\">Info</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-warning\">Warning</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-danger\">Danger</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-link\">Link</a>\r\n                            </p>\r\n\r\n                            <p>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Secondary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Primary</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Success</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Info</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-warning\">Warning</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Danger</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-link\">Link</a>\r\n                            </p>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Disabled Button Group Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Button Sizes Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-lg btn-danger\">Large button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-lg\">Large button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-lg</code> for large button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Default button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\">Default button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Default button</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-sm btn-danger\">Small button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-sm\">Small button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-sm</code> for Small button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-xs btn-danger\">xs button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-xs\">xs button</a>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-xs</code> for Extra Small button.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button Sizes Ends -->\r\n\r\n        <!--Round Button Sizes Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-lg btn-danger\">Large button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-lg\">Large button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-lg</code> for large button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-danger\">Default button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-round btn-raised\">Default button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Default button</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-sm btn-danger\">Small button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-sm\">Small button</a><br>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-sm</code> for Small button.</p>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-xs btn-danger\">xs button</a>\r\n                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary btn-xs\">xs button</a>\r\n                        <p class=\"mt-1 mb-5\">Use class <code>.btn-xs</code> for Extra Small button.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Button Sizes Ends -->\r\n    </div>\r\n\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Floating action buttons Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Floating action buttons <small>a.k.a fab</small></h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"floating-btn\">\r\n                            <p>Use <code>.btn-fab</code> class with button classes for floating buttons.</p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-fab\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-fab\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-fab\"><i class=\"fa fa-search\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-info btn-fab\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-fab\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                        <div class=\"floating-btn-small pt-2\">\r\n                            <p>Use <code>.btn-sm</code> classes for small floating buttons.</p>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-fab btn-sm\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-fab btn-sm\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-fab btn-sm\"><i class=\"fa fa-search\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-info btn-fab btn-sm\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-warning btn-fab btn-sm\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-sm\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Floating action buttons Ends -->\r\n\r\n        <!--Vertical Button Groups starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Vertical Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>Use <code>.btn-group-vertical</code> class for vertical button group.</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 col-lg-6\">\r\n                                <div class=\"btn-group-vertical\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Button</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-lg-6\">\r\n                                <div class=\"btn-group-vertical\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-secondary\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">Button</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Button</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Vertical Button Groups Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Justified Button Groups Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Justified Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xl-6 col-lg-12\">\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">Right</a>\r\n                                </div>\r\n                                <p><code>btn-group.btn-group-justified.btn-group-raised</code></p>\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-success\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-danger\">Right</a>\r\n                                </div>\r\n                                <p>Use <code>.btn-COLOR</code> class for colored buttons for colored buttons.</p>\r\n                                <fieldset disabled>\r\n                                    <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">Left</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-success\">Middle</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-danger\">Right</a>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <p>disabled <code>btn-group.btn-group-justified.btn-group-raised</code></p>\r\n                            </div>\r\n                            <div class=\"col-xl-6 col-lg-12\">\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round\">Right</a>\r\n                                </div>\r\n                                <p><code>btn-group.btn-group-justified.btn-group-raised.btn-round</code></p>\r\n                                <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-primary\">Left</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-success\">Middle</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-danger\">Right</a>\r\n                                </div>\r\n                                <p>Use <code>.btn-COLOR</code> with <code>.btn-round</code> class for colored round buttons for colored buttons.</p>\r\n                                <fieldset disabled>\r\n                                    <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-primary\">Left</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-success\">Middle</a>\r\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-round btn-danger\">Right</a>\r\n                                    </div>\r\n                                </fieldset>\r\n                                <p>disabled <code>btn-group.btn-group-justified.btn-group-raised.btn-round</code></p>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Justified Button Groups Ends -->\r\n\r\n        <!--Block Button Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Block Button</h4>\r\n                    <p>For raised block button, use <code>.btn-block.btn-raised</code> classes.<br>\r\n                    Block buttons can be used with diffrent size classes too.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"block-button\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-secondary btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-success btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-lg btn-block btn-raised\">Block level button</a>\r\n                            <fieldset disabled>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-secondary mt-2 btn-lg btn-block btn-raised\">Block level button disabled</a>\r\n                            </fieldset>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Block Button Ends -->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Button Toolbar Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button Toolbar</h4>\r\n                    <p>To create button toolbar, use <code>.btn-toolbar</code> class as wrapper of <code>.btn-group</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-warning btn-raised\" id=\"dropdownBasic3\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset disabled>\r\n                            <div class=\"btn-toolbar mb-2\">\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">1</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">2</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">3</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-info btn-raised\">7</a>\r\n                                    <span ngbDropdown>\r\n                                        <button class=\"btn btn-warning btn-raised\" id=\"dropdownBasic4\" ngbDropdownToggle>Dropdown</button>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                            <button class=\"dropdown-item\">Action</button>\r\n                                            <button class=\"dropdown-item\">Another Action</button>\r\n                                            <button class=\"dropdown-item\">Something else is here</button>\r\n                                        </div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button Toolbar Ends -->\r\n\r\n        <!--Round Button Toolbar Starts -->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Button Toolbar</h4>\r\n                    <p>To create round button toolbar, use <code>.btn-round</code> class.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-primary btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised btn-round\" id=\"dropdownBasic5\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-primary btn-raised btn-round\" id=\"dropdownBasic6\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic6\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar mb-3\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-round btn-info\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-warning btn-round btn-raised\" id=\"dropdownBasic7\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic7\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset disabled>\r\n                            <div class=\"btn-toolbar mb-3\">\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">1</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">2</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn\">3</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">4</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">5</a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-raised\">6</a>\r\n                                </div>\r\n\r\n                                <div class=\"btn-group mr-2\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-round btn-info btn-raised\">7</a>\r\n                                    <span ngbDropdown>\r\n                                        <button class=\"btn btn-warning btn-round btn-raised\" id=\"dropdownBasic8\" ngbDropdownToggle>Dropdown</button>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic8\">\r\n                                            <button class=\"dropdown-item\">Action</button>\r\n                                            <button class=\"dropdown-item\">Another Action</button>\r\n                                            <button class=\"dropdown-item\">Something else is here</button>\r\n                                        </div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Button Toolbar Ends -->\r\n    </div>\r\n</section>\r\n<!--Basic button ends -->\r\n\r\n<!--Outline button starts -->\r\n<section id=\"outline-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Outline Buttons</div>\r\n            <p class=\"content-sub-header\">Use <code>.btn-outline-COLOR</code> class for outline buttons.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"flat-outline mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-info\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">Danger</a>\r\n                        </div>\r\n                        <div class=\"flat-group-outline\">\r\n                            <div ngbDropdown>\r\n                                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-success\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-danger\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-info\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-warning\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"flat-outline mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Primary</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">Success</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-info btn-round\">Info</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning btn-round\">Warning</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">Danger</a>\r\n                        </div>\r\n                        <div class=\"flat-group-outline\">\r\n                            <div ngbDropdown>\r\n                                <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Primary</button>\r\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                    <button class=\"dropdown-item\">Action</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-success btn-round\" id=\"dropdownBasic2\" ngbDropdownToggle>Success</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-danger btn-round\" id=\"dropdownBasic3\" ngbDropdownToggle>Danger</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic3\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-info btn-round\" id=\"dropdownBasic4\" ngbDropdownToggle>Info</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic4\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-warning btn-round\" id=\"dropdownBasic5\" ngbDropdownToggle>Warning</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic5\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Floating Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Floating Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"floating-btn mb-2\">\r\n                            <a class=\"btn btn-outline-primary\" href=\"javascript:void(0)\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a class=\"btn btn-outline-success\" href=\"javascript:void(0)\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a class=\"btn btn-outline-info\" href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\r\n                            <a class=\"btn btn-outline-warning\" href=\"javascript:void(0)\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a class=\"btn btn-outline-danger\" href=\"javascript:void(0)\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                        <div class=\"floating-btn\">\r\n                            <a class=\"btn btn-outline-primary btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-star-o\"></i></a>\r\n                            <a class=\"btn btn-outline-success btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-user-o\"></i></a>\r\n                            <a class=\"btn btn-outline-info btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\r\n                            <a class=\"btn btn-outline-warning btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-camera\"></i></a>\r\n                            <a class=\"btn btn-outline-danger btn-fab\" href=\"javascript:void(0)\"><i class=\"fa fa-smile-o\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Floating Buttons Ends-->\r\n        \r\n        <!--Block Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Block Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"block-button\">\r\n                            <a class=\"btn btn-outline-success btn-lg btn-block\" href=\"javascript:void(0)\">Block button</a>\r\n                            <a class=\"btn btn-outline-danger btn-lg btn-block btn-round\" href=\"javascript:void(0)\">Block button</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Block Buttons Ends-->\r\n\r\n        <!--Vertical Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Vertical Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group-vertical\">\r\n                            <a class=\"btn btn-outline-primary\" href=\"javascript:void(0)\">Button</a>\r\n                            <a class=\"btn btn-outline-danger\" href=\"javascript:void(0)\">Button</a>\r\n                            <a class=\"btn btn-outline-info\" href=\"javascript:void(0)\">Button</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Vertical Buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Outline Button Groups Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Right</a>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">Right</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Button Groups Ends-->\r\n\r\n        <!--Round Outline Button Groups Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Outline Button Groups</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised btn-round mb-2\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Right</a>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"btn-group btn-group-justified btn-group-raised btn-round\">\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">Left</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">Middle</a>\r\n                            <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">Right</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Button Groups Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Outline Toolbar Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Outline Toolbar Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-success\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-info\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-raised\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Outline Toolbar Buttons Ends-->\r\n\r\n        <!--Round Outline Toolbar Buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Outline Toolbar Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-toolbar mb-2\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-flat btn-primary btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"btn-toolbar\">\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">1</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">2</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-flat btn-round\">3</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-success btn-round\">4</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-info btn-round\">5</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-warning btn-round\">6</a>\r\n                            </div>\r\n\r\n                            <div class=\"btn-group mr-2\">\r\n                                <a href=\"javascript:void(0)\" class=\"btn btn-outline-danger btn-round\">7</a>\r\n                                <span ngbDropdown>\r\n                                    <button class=\"btn btn-outline-primary btn-round\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</button>\r\n                                    <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic1\">\r\n                                        <button class=\"dropdown-item\">Action</button>\r\n                                        <button class=\"dropdown-item\">Another Action</button>\r\n                                        <button class=\"dropdown-item\">Something else is here</button>\r\n                                    </div>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Outline Toolbar Buttons Ends-->\r\n    </div>\r\n</section>\r\n<!--Outline button Ends -->\r\n\r\n<!--Social Media button starts -->\r\n<section id=\"social-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mt-2\">\r\n            <div class=\"content-header\">Social Media Buttons</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Basic Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic Social Buttons</h4>\r\n                    <p>Use <code>.btn-social</code> class with <code>.btn-SOCIAL_NAME</code> class like <code>.btn-facebook</code> for social buttons with icons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic Social Buttons Ends-->\r\n\r\n        <!--Round Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Round Social Buttons</h4>\r\n                    <p>Use <code>.btn-social</code> class with <code>.btn-SOCIAL_NAME</code> class like <code>.btn-facebook</code> for social buttons with icons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Round Social Buttons Ends-->\r\n\r\n        <!--Social Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Outline Buttons</h4>\r\n                    <p>Use <code>.btn-outline-SOCIAL_NAME</code> class like <code>.btn-outline-facebook</code> for social outline buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Outline Buttons Ends-->\r\n\r\n        <!--Social Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Round Outline Buttons</h4>\r\n                    <p>Use <code>.btn-outline-SOCIAL_NAME</code> class like <code>.btn-outline-facebook</code> for social outline buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Round Outline Buttons Ends-->\r\n\r\n        <!--Flat Social Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Flat Social Buttons</h4>\r\n                    <p>Use <code>.btn-SOCIAL_NAME-flat</code> class like <code>.btn-facebook-flat</code> class for flat social buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <a class=\"btn btn-social btn-min-width btn-adn-flat mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span> App.net</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-bitbucket-flat mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span> Bitbucket</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-dropbox-flat mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span> Dropbox</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-facebook-flat mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span> Facebook</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-flickr-flat mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span> Flickr</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-foursquare-flat mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span> Foursquare</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-github-flat mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span> GitHub</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-google-flat mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span> Google</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-instagram-flat mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span> Instagram</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-linkedin-flat mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span> LinkedIn</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-microsoft-flat mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span> Microsoft</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-odnoklassniki-flat mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span> Odnoklassniki</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-openid-flat mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span> OpenID</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-pinterest-flat mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span> Pinterest</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-reddit-flat mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span> Reddit</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-soundcloud-flat mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span> SoundCloud</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-tumblr-flat mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span> Tumblr</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-twitter-flat mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span> Twitter</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-vimeo-flat mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span> Vimeo</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-vk-flat mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span> VK</a>\r\n                        <a class=\"btn btn-social btn-min-width btn-yahoo-flat mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span> Yahoo!</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Flat Social Buttons Ends-->\r\n\r\n        <!--Social Icon Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Icon Buttons</h4>\r\n                    <p>Use <code>.btn-social-icon</code> class for social icon buttons.</p>\r\n                    <p>Use <code>.btn-round</code> class for round buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-icon-square\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                        <div class=\"social-icon-round\">\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Icon Buttons Ends-->\r\n        \r\n        <!--Social Icon and Round Outline Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Icon and Round Outline Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-icon-square\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                        <div class=\"social-icon-round\">\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-adn\"><span class=\"fa fa-adn\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-bitbucket\"><span class=\"fa fa-bitbucket\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-dropbox\"><span class=\"fa fa-dropbox\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-flickr\"><span class=\"fa fa-flickr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-foursquare\"><span class=\"fa fa-foursquare\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-github\"><span class=\"fa fa-github\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-google\"><span class=\"fa fa-google\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-instagram\"><span class=\"fa fa-instagram\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-linkedin\"><span class=\"fa fa-linkedin\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-microsoft\"><span class=\"fa fa-windows\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-odnoklassniki\"><span class=\"fa fa-odnoklassniki\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-openid\"><span class=\"fa fa-openid\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-pinterest\"><span class=\"fa fa-pinterest\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-reddit\"><span class=\"fa fa-reddit\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-soundcloud\"><span class=\"fa fa-soundcloud\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-tumblr\"><span class=\"fa fa-tumblr\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-vimeo\"><span class=\"fa fa-vimeo-square\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-vk\"><span class=\"fa fa-vk\"></span></a>\r\n                            <a class=\"btn btn-social-icon btn-round mr-2 mb-2 btn-outline-yahoo\"><span class=\"fa fa-yahoo\"></span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Icon and Round Outline Buttons Ends-->\r\n        \r\n        <!--Social Block Buttons Starts-->\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Social Block Buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"social-buttons-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-adn\">\r\n                                        <span class=\"fa fa-adn\"></span> Sign in with App.net\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-bitbucket\">\r\n                                        <span class=\"fa fa-bitbucket\"></span> Sign in with Bitbucket\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-dropbox\">\r\n                                        <span class=\"fa fa-dropbox\"></span> Sign in with Dropbox\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-facebook\">\r\n                                        <span class=\"fa fa-facebook\"></span> Sign in with Facebook\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-flickr\">\r\n                                        <span class=\"fa fa-flickr\"></span> Sign in with Flickr\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-foursquare\">\r\n                                        <span class=\"fa fa-foursquare\"></span> Sign in with Foursquare\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-github\">\r\n                                        <span class=\"fa fa-github\"></span> Sign in with GitHub\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-google\">\r\n                                        <span class=\"fa fa-google\"></span> Sign in with Google\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-instagram\">\r\n                                        <span class=\"fa fa-instagram\"></span> Sign in with Instagram\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-linkedin\">\r\n                                        <span class=\"fa fa-linkedin\"></span> Sign in with LinkedIn\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-microsoft\">\r\n                                        <span class=\"fa fa-windows\"></span> Sign in with Microsoft\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-odnoklassniki\">\r\n                                        <span class=\"fa fa-odnoklassniki\"></span> Sign in with Odnoklassniki\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-openid\">\r\n                                        <span class=\"fa fa-openid\"></span> Sign in with OpenID\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-pinterest\">\r\n                                        <span class=\"fa fa-pinterest\"></span> Sign in with Pinterest\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-4\">\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-reddit\">\r\n                                        <span class=\"fa fa-reddit\"></span> Sign in with Reddit\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-soundcloud\">\r\n                                        <span class=\"fa fa-soundcloud\"></span> Sign in with SoundCloud\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-tumblr\">\r\n                                        <span class=\"fa fa-tumblr\"></span> Sign in with Tumblr\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-twitter\">\r\n                                        <span class=\"fa fa-twitter\"></span> Sign in with Twitter\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-vimeo\">\r\n                                        <span class=\"fa fa-vimeo-square\"></span> Sign in with Vimeo\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-vk\">\r\n                                        <span class=\"fa fa-vk\"></span> Sign in with VK\r\n                                    </a>\r\n                                    <a class=\"btn btn-block btn-social mb-2 btn-yahoo\">\r\n                                        <span class=\"fa fa-yahoo\"></span> Sign in with Yahoo!\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Social Block Buttons Ends-->\r\n    </div>\r\n</section>\r\n<!--Social Media button Ends -->"

/***/ }),

/***/ "./src/app/components/bootstrap/buttons/buttons.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/buttons/buttons.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/buttons/buttons.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/buttons/buttons.component.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/components/bootstrap/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/components/bootstrap/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/carousel/carousel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/carousel/carousel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Carousel Starts-->\r\n<section id=\"carousel\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Carousel</div>\r\n      <p class=\"content-sub-header\">Directive to easily create carousels based on Bootstrap's markup.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Carousel Starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Carousel</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/12.jpg\" alt=\"Random first slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">First slide label</h3>\r\n                  <p class=\"mb-0\">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">Second slide label</h3>\r\n                  <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/14.jpg\" alt=\"Random third slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 class=\"ff-serif text-uppercase\">Third slide label</h3>\r\n                  <p class=\"mb-0\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-carousel>\r\n            <h5 class=\"mt-5 mb-4 text-bold-500\">Basic Code :</h5>\r\n            <pre class=\"language-typescript overflow-hidden\">\r\n              <code class=\"language-typescript\">\r\n                import &#123;Component&#125; from '@angular/core';\r\n                @Component(&#123;\r\n                  selector: 'ngbd-carousel-basic',\r\n                  templateUrl: './carousel-basic.html'\r\n                &#125;)\r\n                export class NgbdCarouselBasic &#123;\r\n                &#125;</code> \r\n          </pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Carousel Ends-->\r\n\r\n    <!--Global configuration of carousels Starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Global configuration of carousels</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-carousel>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/15.jpg\" alt=\"Random first slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>10 seconds between slides...</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/16.jpg\" alt=\"Random second slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>No keyboard...</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template ngbSlide>\r\n                <img src=\"assets/img/photos/17.jpg\" alt=\"Random third slide\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>And no wrap after last slide.</h3>\r\n                  <p>This carousel uses customized default values.</p>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-carousel>\r\n            <h5 class=\"mt-5 mb-4 text-bold-500\">Configuration Code :</h5>\r\n            <pre class=\"language-typescript\">\r\n<code class=\"language-typescript\">\r\n  import &#123;Component&#125; from '@angular/core';\r\n  import &#123;NgbCarouselConfig&#125; from '@ng-bootstrap/ng-bootstrap';\r\n\r\n  @Component(&#123;\r\n    selector: 'ngbd-carousel-config',\r\n    templateUrl: './carousel-config.html',\r\n    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers\r\n  &#125;)\r\n  export class NgbdCarouselConfig &#123;\r\n    constructor(config: NgbCarouselConfig) &#123;\r\n      \r\n      config.interval = 10000;\r\n      config.wrap = false;\r\n      config.keyboard = false;\r\n    &#125;\r\n  &#125;</code> \r\n            </pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Global configuration of carousels Starts-->\r\n  </div>\r\n</section>\r\n<!--Carousel Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/carousel/carousel.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/carousel/carousel.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/carousel/carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/carousel/carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        //  Code formatting script
        $.getScript('./assets/js/prism.min.js');
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/bootstrap/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/components/bootstrap/carousel/carousel.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/collapse/collapse.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/collapse/collapse.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Collapse on toggle starts-->\r\n<section id=\"collapse\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Collapse</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div>\r\n              <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n                      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                Toggle\r\n              </button>\r\n            </div>\r\n            <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n              <br>\r\n              <p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.</p>\r\n              <p>Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p>\r\n              <p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Collapse on toggle ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/collapse/collapse.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/collapse/collapse.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/collapse/collapse.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/collapse/collapse.component.ts ***!
  \*********************************************************************/
/*! exports provided: CollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return CollapseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__(/*! ./collapse.component.html */ "./src/app/components/bootstrap/collapse/collapse.component.html"),
            styles: [__webpack_require__(/*! ./collapse.component.scss */ "./src/app/components/bootstrap/collapse/collapse.component.scss")]
        })
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/datepicker/datepicker.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/datepicker/datepicker.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"datepicker\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n     <div class=\"content-header\">Datepicker</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Simple datepicker starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Simple datepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n\r\n            <div class=\"block mt-3 mb-3\">\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\r\n              <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\r\n            </div>\r\n\r\n            <p>Month: {{ date.month }}.{{ date.year }}</p>\r\n            <p>Model: {{ model | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Simple datepicker Ends-->\r\n    \r\n    <!--Disabled/Enabled datepicker starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Disabled datepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker [(ngModel)]=\"disabledModel\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\r\n            <div class=\"block mt-3\">\r\n              <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n              {{ disabled ? \"disabled\" : \"enabled\"}}\r\n            </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Disabled/Enabled datepicker ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Datepicker in a popup starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Datepicker in a popup</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"popupModel\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text\" (click)=\"d2.toggle()\">\r\n                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <p class=\"mt-4\">Model: {{ popupModel | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Datepicker in a popup ends-->\r\n\r\n    <!--Custom day view starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom day view</h4>\r\n          <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                    [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\r\n              <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\"\r\n                [class.text-muted]=\"disabled\">\r\n              {{ date.day }}\r\n            </span>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom day view ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Multiple months datepickers starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Multiple months</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n\r\n            <p class=\"pt-3\">Inline</p>\r\n\r\n            <form class=\"form-inline\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"\r\n                    ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text\" (click)=\"d.toggle()\">\r\n                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <p class=\"pt-3\">Options</p>\r\n\r\n            <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n            <option [ngValue]=\"1\">One month</option>\r\n            <option [ngValue]=\"2\">Two months</option>\r\n          </select>\r\n\r\n            <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n            <option value=\"none\">Without navigation</option>\r\n            <option value=\"select\">With select boxes</option>\r\n            <option value=\"arrows\">Without select boxes</option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Multiple months datepickers ends-->\r\n\r\n    <!--Range selection datepickers starts-->\r\n    <div class=\"col-lg-12 col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Range selection</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-datepicker #dp1 ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n            </ngb-datepicker>\r\n\r\n            <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n              <span class=\"custom-day\"\r\n                    [class.focused]=\"focused\"\r\n                    [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                    [class.faded]=\"isHovered(date) || isInside(date)\"\r\n                    (mouseenter)=\"hoveredDate = date\"\r\n                    (mouseleave)=\"hoveredDate = null\">\r\n                {{ date.day }}\r\n              </span>\r\n            </ng-template>\r\n\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>From: {{ fromDate | json }} </p>\r\n              </div>\r\n              <div class=\"col-12 col-md-6\">\r\n                <p>To: {{ toDate | json }} </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Range selection datepickers ends-->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/bootstrap/datepicker/datepicker.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/datepicker/datepicker.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem; }\n\n.custom-day.focused {\n  background-color: #e6e6e6; }\n\n.custom-day.range, .custom-day:hover {\n  background-color: #0275d8;\n  color: white; }\n\n.faded {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/datepicker/datepicker.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/datepicker/datepicker.component.ts ***!
  \*************************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var now = new Date();
var I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
};
// Range datepicker Start 
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
// Range datepicker Ends
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        var _this = this;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.disabledModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
    }
    // Range datepicker starts
    DatepickerComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    // Range datepicker ends
    // Selects today's date
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    // Custom Day View Starts
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    // Custom Day View Ends  
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/components/bootstrap/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/components/bootstrap/datepicker/datepicker.component.scss")],
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/dropdowns/dropdowns.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/dropdowns/dropdowns.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Dropdown section starts-->\r\n<section id=\"dropdown\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Dropdown</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Toggle dropdown starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Toggle dropdown</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown>\r\n                            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                                <button class=\"dropdown-item\">Action - 1</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <span ngbDropdown placement=\"top-right\">\r\n                                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\r\n                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                    <button class=\"dropdown-item\">Action - 1</button>\r\n                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Toggle dropdown ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Manual triggers starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Manual triggers</h4>\r\n                    <p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div ngbDropdown #myDrop1=\"ngbDropdown\">\r\n                            <button class=\"btn btn-outline-primary\" id=\"dropdownMenu2\" ngbDropdownToggle>Toggle dropdown</button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                                <button class=\"dropdown-item\">Action - 1</button>\r\n                                <button class=\"dropdown-item\">Another Action</button>\r\n                                <button class=\"dropdown-item\">Something else is here</button>\r\n                            </div>\r\n                            <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop1.open();\">Open from outside</button>\r\n                            <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop1.close();\">Close from outside</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Manual triggers ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Button groups and split buttons starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button groups and split buttons</h4>\r\n                    <p>Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger\">Action</button>\r\n                            <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <span class=\"sr-only\">Toggle Dropdown</span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-info btn-raised dropdown-toggle\" ngbDropdownToggle>\r\n                                Dropdown\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n                            <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" ngbDropdownToggle>\r\n                                Dropdown\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <div ngbDropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                                <a class=\"dropdown-item\">Action</a>\r\n                                <a class=\"dropdown-item\">Another action</a>\r\n                                <a class=\"dropdown-item\">Something else here</a>\r\n                                <div class=\"dropdown-divider\"></div>\r\n                                <a class=\"dropdown-item\">Separated link</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Button groups and split buttons ends-->\r\n    </div>\r\n</section>\r\n<!--Dropdown section ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/dropdowns/dropdowns.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/dropdowns/dropdowns.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/dropdowns/dropdowns.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/dropdowns/dropdowns.component.ts ***!
  \***********************************************************************/
/*! exports provided: DropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function() { return DropdownsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent() {
    }
    DropdownsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdowns',
            template: __webpack_require__(/*! ./dropdowns.component.html */ "./src/app/components/bootstrap/dropdowns/dropdowns.component.html"),
            styles: [__webpack_require__(/*! ./dropdowns.component.scss */ "./src/app/components/bootstrap/dropdowns/dropdowns.component.scss")],
        })
    ], DropdownsComponent);
    return DropdownsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/input-groups/input-groups.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/bootstrap/input-groups/input-groups.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Input Group Starts-->\r\n<section id=\"input-groups\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Input groups</div>\r\n            <p class=\"content-sub-header\">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>\r\n        </div>\r\n    </div>\r\n    <!--Basic Input Groups Starts-->\r\n    <section id=\"basic-input-group\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Basic Input Groups</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                                <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <label for=\"basic-url\">Your vanity URL</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon3\">https://example.com/users/</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                                <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\">.00</span>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                    <span class=\"input-group-text\">0.00</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Basic Input Groups Ends-->\r\n\r\n    <!--Input Groups Sizing Starts-->\r\n    <section id=\"input-group-sizing\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Input Groups Sizing</h4>\r\n                        <p>Add the relative form sizing classes to the <code>.input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group input-group-lg mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon1\">@</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon1\">\r\n                            </div>\r\n\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon2\">@</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon2\">\r\n                            </div>\r\n\r\n                            <div class=\"input-group input-group-sm\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"sizing-addon3\">@</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"sizing-addon3\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Input Groups Sizing Ends-->\r\n\r\n    <!--Checkboxes addons Starts-->\r\n    <section id=\"checkbox-radio\">\r\n        <div class=\"row match-height\">\r\n            <div class=\"col-md-12 col-lg-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Checkboxes addons</h4>\r\n                        <p>Place any checkbox option within an input group's addon instead of text.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div><!-- /input-group -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Radio addons</h4>\r\n                        <p>Place any radio option within an input group's addon instead of text.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <input type=\"radio\" aria-label=\"Radio button for following text input\">\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\">\r\n                            </div><!-- /input-group -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Checkboxes addons Ends-->\r\n\r\n    <!--Button addons Starts-->\r\n    <section id=\"buttons-addons\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Button addons</h4>\r\n                        <p>Buttons in input groups are a bit different and require one extra level of nesting. Instead of <code>.input-group-addon</code>, you'll need to use <code>.input-group-btn</code> to wrap the buttons. This is required due to default browser styles that cannot be overridden.</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-btn\">\r\n                                                <button class=\"btn btn-outline-primary\" type=\"button\">Go!</button>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-btn\">\r\n                                                    <button class=\"btn btn-raised btn-primary\" type=\"button\">Go!</button>\r\n                                                </span>\r\n                                            </div>\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                            </div><!-- /.row -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Button addons Ends-->\r\n\r\n    <!--Buttons with dropdowns Starts-->\r\n    <section id=\"buttons-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Buttons with dropdowns</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <span ngbDropdown>\r\n                                                <button class=\"btn btn-outline-danger btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Action</button>\r\n                                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                                    <button class=\"dropdown-item\">Action</button>\r\n                                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                                </div>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span ngbDropdown>\r\n                                                <button class=\"btn btn-success btn-raised\" id=\"dropdownBasic2\" ngbDropdownToggle>Action</button>\r\n                                                <div ngbDropdownMenu class=\"dropdown-menu-right\" aria-labelledby=\"dropdownBasic2\">\r\n                                                    <button class=\"dropdown-item\">Action</button>\r\n                                                    <button class=\"dropdown-item\">Another Action</button>\r\n                                                    <button class=\"dropdown-item\">Something else is here</button>\r\n                                                </div>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div><!-- /input-group -->\r\n                                </div><!-- /.col-lg-6 -->\r\n                            </div><!-- /.row -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Buttons with dropdowns Ends-->\r\n\r\n    <!--Multiple buttons Starts-->\r\n    <section id=\"multiple-buttons\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4 class=\"card-title\">Multiple buttons</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <div class=\"input-group-btn\">\r\n                                                <button type=\"button\" class=\"btn btn-raised btn-success\" aria-label=\"Add\">\r\n                                                    <i class=\"ft-plus\"></i>\r\n                                                </button>\r\n                                                <button type=\"button\" class=\"btn btn-raised btn-danger\" aria-label=\"Edit\">\r\n                                                    <i class=\"ft-edit-2\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <div class=\"input-group-btn\">\r\n                                                <button type=\"button\" class=\"btn btn-raised btn-warning\" aria-label=\"Copy\">\r\n                                                    <i class=\"ft-copy\"></i>\r\n                                                </button>\r\n                                                <button type=\"button\" class=\"btn btn-raised btn-info\" aria-label=\"Paste\">\r\n                                                    <i class=\"icon-docs\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--Multiple buttons Ends-->\r\n</section>\r\n<!--Input Group Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/input-groups/input-groups.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/bootstrap/input-groups/input-groups.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/input-groups/input-groups.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/bootstrap/input-groups/input-groups.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InputGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupsComponent", function() { return InputGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputGroupsComponent = /** @class */ (function () {
    function InputGroupsComponent() {
    }
    InputGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-groups',
            template: __webpack_require__(/*! ./input-groups.component.html */ "./src/app/components/bootstrap/input-groups/input-groups.component.html"),
            styles: [__webpack_require__(/*! ./input-groups.component.scss */ "./src/app/components/bootstrap/input-groups/input-groups.component.scss")]
        })
    ], InputGroupsComponent);
    return InputGroupsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/lists/lists.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/lists/lists.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--List Group starts-->\r\n<section id=\"list\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">List</div>\r\n            <p class=\"content-sub-header\">List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Basic List Group Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic example</h4>\r\n                    <p>The most basic list group is simply an unordered list with list items, and the proper classes. </p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic List Group Ends-->\r\n\r\n        <!--List Group with badges Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Badges</h4>\r\n                    <p>Add the badges component to any list group item and it will automatically be positioned on the right.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-primary mr-2\">7</span> Cras justo odio\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-danger mr-2\">2</span> Dapibus ac facilisis in\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-success mr-2\">1</span> Morbi leo risus\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-warning mr-2\">4</span> Porta ac consectetur ac\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <span class=\"badge badge-info mr-2\">8</span> Vestibulum at eros\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with badges Ends-->\r\n        \r\n        <!--List Group with Linked items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Linked items</h4>\r\n                    <p>Linkify list group items by using anchor tags instead of list items. No need for individual parents around each element.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item active\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Linked items Ends-->\r\n    \r\n        <!--List Group with Button items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Button items</h4>\r\n                    <p>List group items may be buttons instead of list items. No need for individual parents around each element. <b>Don't use the standard <code>.btn</code> classes here.</b></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"list-group\">\r\n                            <button type=\"button\" class=\"list-group-item\">Cras justo odio</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Dapibus ac facilisis in</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Morbi leo risus</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Porta ac consectetur ac</button>\r\n                            <button type=\"button\" class=\"list-group-item\">Vestibulum at eros</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Button items Ends-->\r\n\r\n        <!--List Group with Disabled list items Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Disabled items</h4>\r\n                    <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to gray it out to appear disabled.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item disabled\">Cras justo odio</li>\r\n                            <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item\">Morbi leo risus</li>\r\n                            <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--List Group with Disabled list items Ends-->\r\n\r\n        <!--Contextual classes Starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual classes</h4>\r\n                    <p>Use contextual classes to style list items, default or linked. Also includes <code>.active</code> state.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-primary\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item list-group-item-success\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item list-group-item-info\">Cras sit amet nibh libero</li>\r\n                            <li class=\"list-group-item list-group-item-warning\">Porta ac consectetur ac</li>\r\n                            <li class=\"list-group-item list-group-item-danger\">Vestibulum at eros</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual classes Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Custom content Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Custom content</h4>\r\n                    <p>Add nearly any HTML within, even for linked list groups like the one below.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start active\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small>3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small>Donec id elit non mi porta.</small>\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small class=\"text-muted\">3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small class=\"text-muted\">Donec id elit non mi porta.</small>\r\n                            </li>\r\n                            <li class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-3\">List group item heading</h5>\r\n                                <small class=\"text-muted\">3 days ago</small>\r\n                                </div>\r\n                                <p class=\"mb-3\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\r\n                                <small class=\"text-muted\">Donec id elit non mi porta.</small>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n        </div>\r\n        <!--Custom content Ends-->\r\n\r\n        <!--Contextual Action Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual Action</h4>\r\n                    <p>Contextual classes also work with <code>.list-group-item-action</code>.Also supported is the <code>.active</code> state; apply it to indicate an active selection on a contextual list group item.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-primary\">This is a primary list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-secondary\">This is a secondary list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-success\">This is a success list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-danger\">This is a danger list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-warning\">This is a warning list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-info\">This is a info list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-light\">This is a light list group item</li>\r\n                            <li class=\"list-group-item list-group-item-action list-group-item-dark\">This is a dark list group item</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual Action Starts-->        \r\n    </div>\r\n</section>\r\n<!--List Group starts-->\r\n"

/***/ }),

/***/ "./src/app/components/bootstrap/lists/lists.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/lists/lists.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/lists/lists.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/bootstrap/lists/lists.component.ts ***!
  \***************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/components/bootstrap/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/components/bootstrap/lists/lists.component.scss")]
        })
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/media-objects/media-objects.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/bootstrap/media-objects/media-objects.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Media Object start -->\r\n<section id=\"bordered-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Media object</div>\r\n\t\t\t<p class=\"content-sub-header\">Abstract object styles for building various types of components that feature a left- or right-aligned image alongside\r\n\t\t\t\ttextual content.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Aligned Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left media</h4>\r\n\t\t\t\t\t<p>Default media element to left of the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-11.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Aligned Media Ends-->\r\n\r\n\t\t<!--Right Aligned Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right media</h4>\r\n\t\t\t\t\t<p>switch image to right of the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-7.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia\r\n\t\t\t\t\t\t\t\t\tcongue felis in faucibus. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-14.png\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Aligned Media Ends-->\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Media With Right Text Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Media With Right Text</h4>\r\n\t\t\t\t\t<p>Use <code>.text-right</code> class to the content.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-13.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin dessert.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Media With Right Text Ends-->\r\n\r\n\t\t<!--Right Media With Right Text Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right media With Right Text</h4>\r\n\t\t\t\t\t<p>Use <code>.text-right</code>to the content for right align text.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chupa chups candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin dessert.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chocolate pudding</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cotton candy jelly</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Media With Right Text Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media Object end -->\r\n\r\n<!-- Bordered Media Object start -->\r\n<section id=\"bordered-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Bordered Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Wrap media list using <code>.media-bordered</code> class for bordered Media Object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Aligned Media Bordered Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Aligned Media Bordered</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-3.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Aligned Media Bordered Ends-->\r\n\r\n\t\t<!--Right Aligned Media Bordered Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chupa chups candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Chocolate pudding</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pt-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cotton candy jelly</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Aligned Media Bordered Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Bordered Media Object end -->\r\n\r\n\r\n<!-- Round Media Object start -->\r\n<section id=\"round-media-object\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Round Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Add <code>.round-media</code> class to image for round media object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Left Round Media Objects</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Round Media Ends-->\r\n\r\n\t\t<!--Right Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right Round Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list\">\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-13.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media pb-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Round Media Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Round Media Object end -->\r\n\r\n\r\n<!-- Bordered Round Media Object start -->\r\n<section id=\"bordered-round-media-object d-flex mr-3\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Bordered Round Media Object</div>\r\n\t\t\t<p class=\"content-sub-header\">Wrap media list using <code>.media-bordered</code> class for bordered Media Object.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Bordered Right Round Media Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Round Media Objects</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Cookie candy</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie\r\n\t\t\t\t\t\t\t\t\t\tlemon drops chocolate cake donut croissant candy.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Tootsie roll dessert </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah. Biscuit\r\n\t\t\t\t\t\t\t\t\t\ticing pastry tootsie roll gingerbread croissant chupa chups. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Lemon drops ice cream</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Lemon drops ice cream chocolate cake marzipan ice cream. Gummi bears cotton candy cheesecake tootsie roll. Candy\r\n\t\t\t\t\t\t\t\t\t\tsweet cake. Tiramisu cookie toffee donut.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Bordered Right Round Media Starts-->\r\n\r\n\t\t<!--Bordered Round Media With Right Align Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Bordered Round Media With Right Align</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Oat cake </h4>\r\n\t\t\t\t\t\t\t\t\t<p>Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee donut.\r\n\t\t\t\t\t\t\t\t\t\tChocolate pie croissant gummi bears muffin chocolate.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-7.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Jelly chocolate cake</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame snaps.Jelly\r\n\t\t\t\t\t\t\t\t\t\tbeans cake chocolate cake gummi bears lollipop.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-8.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Pudding marshmallow</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon drops\r\n\t\t\t\t\t\t\t\t\t\tbrownie biscuit jelly-o biscuit gummies.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 round-media\" src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Bordered Round Media With Right Align Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Bordered Round Media Object end -->\r\n\r\n<!-- Media List start -->\r\n<section id=\"media-list\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Nested Media list</div>\r\n\t\t\t<p class=\"content-sub-header\">With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Media Aligned Left Starts-->\r\n\t\t<div class=\"col-lg-12 col-xl-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Left</h4>\r\n\t\t\t\t\t<p>With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<ul class=\"media-list media-bordered pl-0\">\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-8.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-7.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o. </p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-12.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-6.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o. </p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-24.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Media Aligned Left Ends-->\r\n\r\n\t\t<!--Media Aligned Right Starts-->\r\n\t\t<div class=\"col-lg-12 col-xl-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Right</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<ul class=\"media-list media-bordered pl-0\">\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-9.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-11.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus\r\n\t\t\t\t\t\t\t\t\t\t\t\todio, vestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes\r\n\t\t\t\t\t\t\t\t\t\t\t\tjujubes lemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-13.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-18.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Nested media heading</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio,\r\n\t\t\t\t\t\t\t\t\t\tvestibulum in vulputate at, tempus viverra turpis.Candy biscuit sweet roll pudding topping candy canes jujubes\r\n\t\t\t\t\t\t\t\t\t\tlemon drops jelly-o.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3\" data-src=\"holder.js/96x96\" src=\"assets/img/portrait/small/avatar-s-12.png\" data-holder-rendered=\"true\" style=\"width: 80px; height: 80px;\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Media Aligned Right Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media List end -->\r\n\r\n<!-- Media Alignment start -->\r\n<section id=\"media-alignment\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Media Alignment</div>\r\n\t\t\t<p class=\"content-sub-header\">The images or other media can be aligned top, middle, or bottom. The default is top aligned.<br> Now, for vertical align,\r\n\t\t\t\tTop alignment use <code>.align-self-start</code> class. For Middle alignment, use <code>.align-self-center</code> and\r\n\t\t\t\tFor Bottom alignment, use <code>.align-self-end</code> with left or right aligned class.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" matchHeight =\"card\">\r\n\t\t<!--Left Media vertical Aligned Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Media Aligned Left</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-start\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Top Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon drops\r\n\t\t\t\t\t\t\t\t\t\tchocolate cake donut croissant cotton candy ice cream. Cookie caramels brownie carrot cake macaroon brownie pastry.\r\n\t\t\t\t\t\t\t\t\t\tDonut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw toffee\r\n\t\t\t\t\t\t\t\t\t\tbrownie. Sugar plum danish muffin gummi bears.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-center\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-12.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Middle Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Dragée topping chocolate dragée icing gingerbread. Ice cream jujubes pie sweet roll sweet roll marshmallow powder.\r\n\t\t\t\t\t\t\t\t\t\tCotton candy dessert apple pie chocolate cake dessert lemon drops topping gingerbread biscuit. Topping halvah wafer\r\n\t\t\t\t\t\t\t\t\t\tcroissant jelly tootsie roll. Candy jujubes gummi bears sweet roll dessert. Apple pie jelly gummies tiramisu macaroon\r\n\t\t\t\t\t\t\t\t\t\ttiramisu oat cake. Apple pie tiramisu cake chocolate cake topping danish sweet apple pie sugar plum.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-end\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3\" src=\"assets/img/portrait/small/avatar-s-19.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Bottom Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Sweet sesame snaps dragée chocolate tiramisu cotton candy sweet roll bonbon dessert. Chocolate cake tiramisu dragée.\r\n\t\t\t\t\t\t\t\t\t\tCarrot cake pudding marshmallow fruitcake carrot cake. Brownie cupcake bonbon sweet lemon drops. Lollipop danish\r\n\t\t\t\t\t\t\t\t\t\tjelly beans cotton candy marshmallow brownie. Brownie pastry tiramisu candy oat cake tiramisu halvah cookie tart.\r\n\t\t\t\t\t\t\t\t\t\tCotton candy danish gingerbread powder liquorice.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Left Media vertical Aligned Ends-->\r\n\r\n\t\t<!--Right Media vertical Aligned Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<h4 class=\"card-title\">Right Aligned Media</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<div class=\"media-list media-bordered\">\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Top Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Gummi bears marshmallow sweet roll. Chocolate bar halvah candy tart tart chocolate tart muffin. Cheesecake chocolate\r\n\t\t\t\t\t\t\t\t\t\tbar gummi bears. Cookie topping chocolate biscuit jujubes. Cheesecake muffin danish candy chocolate sweet roll\r\n\t\t\t\t\t\t\t\t\t\tcandy jelly powder. Chocolate marzipan dragée. Biscuit oat cake jelly beans brownie donut ice cream biscuit. Soufflé\r\n\t\t\t\t\t\t\t\t\t\tsoufflé dessert cotton candy chupa chups lemon drops. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-start\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Middle Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Powder jelly topping pastry chocolate icing bonbon powder. Lollipop brownie sugar plum sugar plum carrot cake donut.\r\n\t\t\t\t\t\t\t\t\t\tPastry sugar plum apple pie sesame snaps. Tart brownie gummi bears pie cheesecake cake. Tootsie roll lemon drops\r\n\t\t\t\t\t\t\t\t\t\toat cake muffin danish halvah cookie chocolate croissant. Apple pie oat cake liquorice sesame snaps. Jelly-o jelly-o\r\n\t\t\t\t\t\t\t\t\t\tdragée topping. Sugar plum danish muffin gummi bears.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-center\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-body text-right mr-3\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Bottom Aligned Media</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Ice cream lemon drops marshmallow sweet carrot cake marshmallow candy macaroon cupcake. Tart carrot cake fruitcake.\r\n\t\t\t\t\t\t\t\t\t\tMarzipan liquorice gummies oat cake. Danish jelly beans dessert sweet roll chupa chups candy canes gummies jujubes\r\n\t\t\t\t\t\t\t\t\t\tsoufflé. Cheesecake sweet roll candy muffin halvah dessert candy soufflé. Donut cupcake caramels pastry.Candy carrot\r\n\t\t\t\t\t\t\t\t\t\tcake liquorice chocolate bar gummi bears brownie donut. </p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a class=\"align-self-end\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object d-flex mr-3 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-24.png\" alt=\"Generic placeholder image\" style=\"width: 80px;height: 80px;\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Right Media vertical Aligned Ends-->\r\n\t</div>\r\n</section>\r\n<!-- Media Alignment ends -->"

/***/ }),

/***/ "./src/app/components/bootstrap/media-objects/media-objects.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/bootstrap/media-objects/media-objects.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/media-objects/media-objects.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/bootstrap/media-objects/media-objects.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MediaObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObjectsComponent", function() { return MediaObjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MediaObjectsComponent = /** @class */ (function () {
    function MediaObjectsComponent() {
    }
    MediaObjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-objects',
            template: __webpack_require__(/*! ./media-objects.component.html */ "./src/app/components/bootstrap/media-objects/media-objects.component.html"),
            styles: [__webpack_require__(/*! ./media-objects.component.scss */ "./src/app/components/bootstrap/media-objects/media-objects.component.scss")]
        })
    ], MediaObjectsComponent);
    return MediaObjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/modals/modals.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/modals/modals.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Modal starts-->\r\n<section id=\"modals\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Modals</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Modal with Default options starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Modal with Default options</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title\">Modal title</h4>\r\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <p>One fine body&hellip;</p>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                            </div>\r\n                        </ng-template>\r\n\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n\r\n                        <hr>\r\n                        <p>Action : {{closeResult}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Modal with Default options ends-->\r\n        \r\n        <!--Components as content starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Components as content</h4>\r\n                    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openContent()\">Launch demo modal</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Components as content ends-->\r\n        \r\n        <!--Modal with custom class starts-->\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Modal with custom class</h4>\r\n                    <p>With some style and dark window modal.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ng-template #customContent let-c=\"close\" let-d=\"dismiss\">\r\n                        <div class=\"modal-header\">\r\n                            <h4 class=\"modal-title\">Modal title</h4>\r\n                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <p>Find me here</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                        </div>\r\n                        </ng-template>\r\n                        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openModal(customContent)\">Launch demo modal</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Modal with custom class ends-->\r\n    </div>\r\n</section>\r\n<!--Modal ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/modals/modals.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/modals/modals.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/modals/modals.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/modals/modals.component.ts ***!
  \*****************************************************************/
/*! exports provided: NgbdModalContent, ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    // Open default modal
    ModalsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    ModalsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Open modal with dark section
    ModalsComponent.prototype.openModal = function (customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    };
    // Open content with dark section
    ModalsComponent.prototype.openContent = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/components/bootstrap/modals/modals.component.html"),
            styles: [__webpack_require__(/*! ./modals.component.scss */ "./src/app/components/bootstrap/modals/modals.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/ng-buttons/ng-buttons.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ng-buttons\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-2\">\r\n            <div class=\"content-header\">Ngb-Buttons</div>\r\n            <p class=\"content-sub-header\">Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable specified\r\n                via <code>ngModel</code>.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Checkbox ng-buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Checkbox buttons</h4>\r\n                    <p>Easily create Bootstrap-style checkbox buttons.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-toggle\">\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n                            </label>\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n                            </label>\r\n                            <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n                            </label>\r\n                        </div>\r\n                        <hr>\r\n                        <p>{{model | json}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Checkbox ng-buttons Ends-->\r\n\r\n        <!--Checkbox Reactive buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Checkbox buttons (Reactive Forms)</h4>\r\n                    <p>A value of a checked button is bound to a variable specified via ngModel.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form [formGroup]=\"checkboxGroupForm\">\r\n                            <div class=\"btn-group btn-group-toggle\">\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\r\n                                </label>\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\r\n                                </label>\r\n                                <label class=\"btn-raised btn-primary\" ngbButtonLabel>\r\n                                    <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\r\n                                </label>\r\n                            </div>\r\n                        </form>\r\n                        <hr>\r\n                        <p>{{checkboxGroupForm.value | json}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Checkbox Reactive buttons Ends-->\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Radio buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Radio buttons</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"modelRadio\">\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"2\"> Middle\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"3\"> Right\r\n                            </label>\r\n                        </div>\r\n                        <hr>\r\n                        <p>{{modelRadio}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Radio buttons Ends-->\r\n\r\n        <!--Radio Reactive buttons Starts-->\r\n        <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Radio buttons (Reactive Forms)</h4>\r\n                    <p>A value of a checked button is bound to a variable specified via ngModel.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form [formGroup]=\"radioGroupForm\">\r\n                            <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"modelRadioForm\">\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Left\"> Left (pre-checked)\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Middle\"> Middle\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                <input ngbButton type=\"radio\" value=\"Right\"> Right\r\n                                </label>\r\n                            </div>\r\n                        </form>\r\n                        <hr>\r\n                        <p>{{radioGroupForm.value['modelRadioForm']}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Radio Reactive buttons Ends-->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/ng-buttons/ng-buttons.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts ***!
  \*************************************************************************/
/*! exports provided: NgButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgButtonsComponent", function() { return NgButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgButtonsComponent = /** @class */ (function () {
    function NgButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Checkbox Buttons
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        // Radio Buttons
        this.modelRadio = 1;
    }
    NgButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            'modelRadioForm': 'Left'
        });
    };
    NgButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ng-buttons',
            template: __webpack_require__(/*! ./ng-buttons.component.html */ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.html"),
            styles: [__webpack_require__(/*! ./ng-buttons.component.scss */ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NgButtonsComponent);
    return NgButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/pagination/pagination.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/pagination/pagination.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic Pagination Starts-->\r\n<section id=\"basic-pagination\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Pagination</div>\r\n            <p class=\"content-sub-header\">Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Basic Pagination Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Basic Pagination</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Default pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">directionLinks = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page1\" [directionLinks]=\"false\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">boundaryLinks = true</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page2\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <hr>\r\n                        <p>Current page: {{page2}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Basic Pagination Ends-->\r\n\r\n        <!--Advanced Pagination Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Advanced Pagination</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page3\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = true</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page4\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">maxSize = 5, rotate = true, ellipses = false</h5>\r\n                        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page5\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                        <hr>\r\n                        <p>Current page: {{page5}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Advanced Pagination Ends-->\r\n    </div>\r\n</section>\r\n<section id=\"pagination-option\">\r\n    <div class=\"row\" matchHeight =\"card\">\r\n        <!--Pagination Sizes Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Pagination Sizes</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Large Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Default Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage1\"></ngb-pagination>\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Small Pagination</h5>\r\n                        <ngb-pagination [collectionSize]=\"30\" [(page)]=\"currentPage2\" size=\"sm\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Pagination Sizes Ends-->\r\n\r\n        <!--Pagination Options Starts-->\r\n        <div class=\"col-xl-6 col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Pagination Options</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">Pagination control can be disabled</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page6\" [disabled]='isDisabled'></ngb-pagination>\r\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n                            Toggle disabled\r\n                        </button>\r\n                        \r\n                        <h5 class=\"mb-2 mt-4 text-bold-400\">This pagination uses custom default values</h5>\r\n                        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page7\"></ngb-pagination>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Pagination Options Ends-->\r\n    </div>\r\n</section>\r\n<!--Basic Pagination Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/pagination/pagination.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/pagination/pagination.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .page-link {\n  margin-right: 0;\n  border-radius: 0;\n  border-width: 1px; }\n\n:host /deep/ .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:first-child .page-link, .pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em; }\n\n:host /deep/ .pagination-lg .page-item:last-child .page-link, .pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/pagination/pagination.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/pagination/pagination.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(config) {
        // Variable Declaration
        this.page = 4;
        this.page1 = 4;
        this.page2 = 4;
        this.page3 = 4;
        this.page4 = 4;
        this.page5 = 4;
        this.page6 = 4;
        this.page7 = 4;
        this.currentPage = 2;
        this.currentPage1 = 2;
        this.currentPage2 = 2;
        this.isDisabled = true;
        // customize default values of paginations used by this component tree
        config.boundaryLinks = true;
    }
    // Toggle Disabled
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/bootstrap/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/components/bootstrap/pagination/pagination.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]] // add NgbPaginationConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/popover/popover.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/popover/popover.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Popover Starts-->\r\n<section id=\"popovers\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Popovers</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Quick and easy popovers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Quick and easy popovers</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on right\">\r\n            Popover on right\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on top\">\r\n            Popover on top\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1 mb-1\" placement=\"bottom\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on bottom\">\r\n            Popover on bottom\r\n          </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\" placement=\"left\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on left\">\r\n            Popover on left\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Quick and easy popovers Ends-->\r\n\r\n    <!--HTML and bindings in popovers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">HTML and bindings in popovers</h4>\r\n          <p>Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in\r\n            a <code>&lt;template&gt;</code> element.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\r\n            <button type=\"button\" class=\"btn btn-outline-success btn-sm\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\r\n            I've got markup and bindings in my popover!\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--HTML and bindings in popovers Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Custom and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom and manual triggers</h4>\r\n          <p>You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the\r\n            <code>triggers</code> property.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\"\r\n              popoverTitle=\"Pop title\">\r\n            Hover over me!\r\n          </button>\r\n            <p class=\"pt-3\">\r\n              Alternatively you can take full manual control over popover opening / closing events.\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\"\r\n              (click)=\"p.open()\" popoverTitle=\"Pop title\">\r\n            Click me to open a popover\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"p.close()\">\r\n            Click me to close a popover\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom and manual triggers Ends-->\r\n\r\n    <!--Append popover in the body Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Append popover in the body</h4>\r\n          <p> Set the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering\r\n            element's parent. This option is useful if the element triggering the popover is inside an element that clips\r\n            its contents (i.e. <code>overflow: hidden</code>).</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"mb-0\" style=\"padding: 20px 0; text-align: center; overflow:hidden\">\r\n              <button type=\"button\" class=\"btn btn-outline-success btn-sm mr-1\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n                container=\"body\">\r\n                Popover appended to body\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n                Default popover\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Append popover in the body Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Context and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Context and manual triggers</h4>\r\n          <p> You can optionally pass in a context when manually triggering a popover.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n            <p>\r\n              How would you like to greet <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #x=\"ngbPopover\" triggers=\"manual\">me</strong>?\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n            French\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-1\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n            German\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n            English\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Context and manual triggers Ends-->\r\n\r\n    <!--Popover visibility events Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Popover visibility events</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              popoverTitle=\"Popover on top\" #popover=\"ngbPopover\">\r\n            Open Popover\r\n          </button>\r\n\r\n            <p class=\"pt-3\">\r\n              Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Popover visibility events Ends-->\r\n  </div>\r\n</section>\r\n<!--Popover Starts-->"

/***/ }),

/***/ "./src/app/components/bootstrap/popover/popover.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/popover/popover.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/popover/popover.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/popover/popover.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('x'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"])
    ], PopoverComponent.prototype, "popover", void 0);
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/components/bootstrap/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/bootstrap/popover/popover.component.scss")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/progress/progress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/progress/progress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Progress Bar Starts-->\r\n<section id=\"basic-progress\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Progress Bars</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Contextual progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Contextual progress bars</h4>\r\n                    <p>Stylize the HTML5 <code>progress</code> element with a few extra classes and some crafty browser-specific\r\n                        CSS. Be sure to read up on the browser support.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Contextual progress bars Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars with current value labels Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars with current value labels</h4>\r\n                    <p>Add labels to your progress bars by placing text within the <code class=\"highlighter-rouge\">.progress-bar</code>.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars with current value labels Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Striped progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Striped progress bars</h4>\r\n                    <p>Uses a gradient to create a striped effect.</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Striped progress bars Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars with custom labels Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars with custom labels</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars with custom labels Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Progress bars Sizes Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Progress bars Sizes</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h5 class=\"mb-4\">Default Progress Bar <small>No extra class needed.</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"30\"></ngb-progressbar>\r\n                        </p>\r\n                        <h5 class=\"mb-4\">Medium Progress Bar <small>Use <code>.progress-bar-md</code> class</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"50\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                        </p>\r\n                        <h5 class=\"mb-4\">Small Progress Bar <small> Use <code>.progress-bar-sm</code> class</small></h5>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-sm\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Progress bars Sizes Ends-->\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Global configuration of progress bars Starts-->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Global configuration of progress bars</h4>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <p>\r\n                            <ngb-progressbar type=\"primary\" [value]=\"20\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"success\" [value]=\"40\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"info\" [value]=\"60\"  [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                        <p>\r\n                            <ngb-progressbar type=\"danger\" [value]=\"90\" [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Global configuration of progress bars Ends-->\r\n    </div>\r\n</section>\r\n<!-- Progress Bar Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/progress/progress.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/progress/progress.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/progress/progress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/progress/progress.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProgressBarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarsComponent", function() { return ProgressBarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressBarsComponent = /** @class */ (function () {
    function ProgressBarsComponent() {
    }
    ProgressBarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/components/bootstrap/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/components/bootstrap/progress/progress.component.scss")]
        })
    ], ProgressBarsComponent);
    return ProgressBarsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/rating/rating.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/rating/rating.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Rating Starts-->\r\n<section id=\"rating\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Rating</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Rating Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Rating</h4>\r\n          <p>Rating directive that will take care of visualising a star rating bar.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n            <p>Rate: <b>{{currentRate}}</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Rating Ends-->\r\n\r\n    <!--Custom star template Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom star template</h4>\r\n          <p>Custom rating template provided as child element</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"currentRating\">\r\n              <ng-template let-fill=\"fill\">\r\n                <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n              </ng-template>\r\n            </ngb-rating>\r\n            <p>Rate: <b>{{currentRating}}</b></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom star template Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Events and readonly ratings Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Events and readonly ratings</h4>\r\n          <p>Readonly and editable rating events.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n            <p>Selected: <b>{{selected}}</b> Hovered: <b>{{hovered}}</b>\r\n            </p>\r\n            <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n            {{ readonly ? \"readonly\" : \"editable\"}}\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Events and readonly ratings Ends-->\r\n\r\n    <!--Form integration Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Form integration</h4>\r\n          <p>NgModel and reactive forms can be used without the 'rate' binding</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n\r\n            <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\r\n              <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n              <div class=\"form-control-feedback\">\r\n                <div *ngIf=\"ctrl.valid\">Thanks!</div>\r\n                <div *ngIf=\"ctrl.errors\">Please rate us</div>\r\n              </div>\r\n            </div>\r\n\r\n            <p>Model: <b>{{ ctrl.value }}</b></p>\r\n            <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n            {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n          </button>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Form integration Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Custom decimal rating Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom decimal rating</h4>\r\n          <p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #t let-fill=\"fill\">\r\n              <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\r\n              <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\r\n              <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n              <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n              </span>\r\n            </ng-template>\r\n\r\n            <ngb-rating [(rate)]=\"decimalCurrentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n            <p>Rate: <b>{{decimalCurrentRate}}</b></p>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 1.35\">1.35</button>\r\n            <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 4.72\">4.72</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom decimal rating Ends-->\r\n  </div>\r\n</section>\r\n<!--Rating Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/rating/rating.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/rating/rating.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ ngb-rating span {\n  font-size: 1.5rem; }\n\n:host /deep/ .star {\n  font-size: 1.5rem;\n  color: #b0c4de; }\n\n:host /deep/ .star.filled {\n    color: #FF8D60; }\n\n:host /deep/ .star.full {\n    color: #FF586B; }\n\n:host /deep/ .star .half {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #FF586B;\n    font-size: 2rem; }\n\n:host /deep/ .star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/rating/rating.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bootstrap/rating/rating.component.ts ***!
  \*****************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        // Variable Declaration
        this.currentRate = 8;
        this.currentRating = 6;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.decimalCurrentRate = 3.14;
        // Form integration
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/bootstrap/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/components/bootstrap/rating/rating.component.scss")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/tabs/tabs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/bootstrap/tabs/tabs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tabs Starts-->\r\n<section id=\"tabs\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Tabs</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Tabset Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Tabset</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent><p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.\r\n                Tart tootsie roll donut biscuit cake. Biscuit jelly beans soufflé powder. Wafer macaroon candy canes. Cake caramels tart lemon drops cupcake chocolate dessert. Fruitcake jujubes pie candy apple pie cheesecake. Oat cake donut oat cake gummies cookie powder. Apple pie tart chupa chups jelly marshmallow liquorice wafer gummi bears.\r\n                Jelly sugar plum bear claw macaroon danish chocolate cake apple pie sweet roll cake. Tiramisu wafer caramels icing candy soufflé fruitcake tart candy canes. Jelly carrot cake sweet. Cake chocolate pastry fruitcake sugar plum soufflé. Pie bear claw cake donut jelly-o cake cupcake dessert. Cake candy canes liquorice oat cake chocolate.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Tabset Ends-->    \r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Pills Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Pills</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset type=\"pills\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent><p>Jelly beans halvah brownie macaroon powder. Wafer gingerbread caramels candy tootsie roll powder chupa chups. Marshmallow candy caramels chocolate cake oat cake caramels. Ice cream jelly liquorice danish toffee caramels. Danish icing topping. Carrot cake cupcake marshmallow donut sugar plum gingerbread sweet jelly. Pastry chocolate carrot cake sweet macaroon sweet roll jelly beans topping. Biscuit lollipop jelly-o tart halvah muffin. Caramels topping gummies pastry sweet. Lollipop candy canes bonbon sesame snaps.\r\n                Tart tootsie roll donut biscuit cake. Biscuit jelly beans soufflé powder. Wafer macaroon candy canes. Cake caramels tart lemon drops cupcake chocolate dessert. Fruitcake jujubes pie candy apple pie cheesecake. Oat cake donut oat cake gummies cookie powder. Apple pie tart chupa chups jelly marshmallow liquorice wafer gummi bears.\r\n                Jelly sugar plum bear claw macaroon danish chocolate cake apple pie sweet roll cake. Tiramisu wafer caramels icing candy soufflé fruitcake tart candy canes. Jelly carrot cake sweet. Cake chocolate pastry fruitcake sugar plum soufflé. Pie bear claw cake donut jelly-o cake cupcake dessert. Cake candy canes liquorice oat cake chocolate.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Pills Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Select an active tab by id Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Select an active tab by id</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset #t=\"ngbTabset\">\r\n              <ngb-tab title=\"Simple\" id=\"foo\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab id=\"bar\">\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent><p>Jelly-o cake chocolate bar. Ice cream gummi bears candy canes cookie toffee halvah marzipan. Gummies dessert powder biscuit sweet roll. Biscuit muffin jujubes. Tiramisu pie danish muffin oat cake. Apple pie cupcake apple pie cotton candy toffee biscuit pie. Lemon drops dessert marshmallow. Jelly-o soufflé muffin muffin. Tootsie roll carrot cake sugar plum brownie chocolate cake croissant cotton candy lemon drops toffee.\r\n                Sweet roll cotton candy jelly-o tootsie roll candy canes liquorice tart cotton candy tiramisu. Powder sesame snaps chocolate liquorice pudding jelly cake pie. Lemon drops ice cream chocolate bar pudding dragée. Pastry cake cheesecake chocolate cake. Toffee bonbon fruitcake candy canes biscuit. Jelly chocolate cake danish tart jelly-o candy jelly powder. Brownie gummi bears brownie bear claw brownie bear claw croissant marshmallow. Pudding cake icing gummies pudding candy gingerbread macaroon. Chupa chups pastry tiramisu liquorice tiramisu marshmallow gummies brownie candy canes.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n            <p>\r\n              <button class=\"btn btn-outline-primary\" (click)=\"t.select('bar')\">Selected tab with \"bar\" id</button>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Select an active tab by id Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Prevent tab change Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Prevent tab change</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset (tabChange)=\"beforeChange($event)\">\r\n              <ngb-tab title=\"Simple\" id=\"foo\">\r\n                <ng-template ngbTabContent><p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly.\r\n                Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah. Danish sweet roll cheesecake candy canes marzipan liquorice. Sugar plum halvah lemon drops donut sesame snaps lollipop oat cake.\r\n                Cake dessert topping tiramisu jelly beans. Gummies oat cake sugar plum cookie carrot cake halvah powder sesame snaps. Bear claw gummi bears marzipan powder pudding lemon drops cotton candy sweet roll chupa chups. Marzipan tootsie roll tart lemon drops gummies. Cheesecake wafer carrot cake chocolate jelly beans candy liquorice fruitcake pastry. Gummi bears cheesecake macaroon jelly beans wafer cookie. Gingerbread chocolate bar icing. Candy canes donut icing macaroon cupcake. Ice cream ice cream cake pudding gummi bears.</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab id=\"bar\" title=\"I can't be selected...\">\r\n                <ng-template ngbTabContent><p>I can't be selected content</p></ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"But I can!\">\r\n                <ng-template ngbTabContent><p>Apple pie muffin apple pie gummi bears topping biscuit. Liquorice cookie cookie halvah dragée dessert marshmallow macaroon. Muffin sesame snaps chocolate bar dragée cookie lemon drops. Danish apple pie macaroon brownie bear claw chocolate cake gummi bears wafer wafer. Soufflé danish sweet liquorice jelly-o bonbon. Halvah marzipan halvah fruitcake jujubes cheesecake liquorice sesame snaps. Biscuit chocolate candy sugar plum powder cupcake candy canes cheesecake cake. Tart apple pie lemon drops.\r\n                Muffin oat cake marzipan fruitcake donut. Tootsie roll dessert macaroon tart cake cheesecake wafer chupa chups dragée. Muffin oat cake cookie chocolate gingerbread chocolate bar powder. Muffin lollipop bonbon wafer chocolate cupcake toffee croissant cotton candy. Jelly candy macaroon oat cake carrot cake. Chupa chups gummies tootsie roll cotton candy. Gummi bears lemon drops chocolate topping lollipop marshmallow gummies icing brownie. Bear claw cake ice cream candy canes sweet liquorice icing. Candy cake chocolate cake candy canes ice cream fruitcake fruitcake jujubes halvah.</p></ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Prevent tab change Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Nav justification Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Nav justification</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset [justify]=\"currentJustify\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                  <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                  craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                  yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                  shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                  sint qui sapiente accusamus tattooed echo park.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"A very long nav title\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n\r\n            <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"start\">Start\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"center\">Center\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"end\">End\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"fill\">Fill\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"justified\">Justified\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Nav justification Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Nav orientation Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Nav orientation</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\r\n              <ngb-tab title=\"Simple\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                  master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                  iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab>\r\n                <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                  <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                  craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                  cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                  yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                  shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                  sint qui sapiente accusamus tattooed echo park.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                <ng-template ngbTabContent>\r\n                  <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n\r\n            <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"vertical\">Vertical\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Nav orientation Ends-->\r\n  </div>\r\n</section>\r\n<!--Tabs Starts-->"

/***/ }),

/***/ "./src/app/components/bootstrap/tabs/tabs.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/bootstrap/tabs/tabs.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/tabs/tabs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bootstrap/tabs/tabs.component.ts ***!
  \*************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    TabsComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'bar') {
            $event.preventDefault();
        }
    };
    ;
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/components/bootstrap/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/components/bootstrap/tabs/tabs.component.scss")],
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/timepicker/timepicker.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/timepicker/timepicker.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Timepicker Starts-->\r\n<section id=\"timepicker\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Timepicker</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Basic Timepicker</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n            <button class=\"btn mb-3 mt-3\" style=\"opacity: 0;\">&nbsp;</button>\r\n            <hr>\r\n            <p>Selected time: {{time | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Timepicker Ends-->\r\n\r\n    <!--Meridian Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Meridian</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\r\n            <button class=\"btn btn-outline-{{meridian ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleMeridian()\">\r\n              Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n            <hr>\r\n            <p>Selected time: {{meridianTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Meridian Timepicker Ends-->\r\n\r\n    <!--Seconds Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Seconds</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"secondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\r\n            <button class=\"btn btn-outline-{{seconds ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSeconds()\">\r\n              Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n            <hr>\r\n            <p>Selected time: {{secondsTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Seconds Timepicker Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Spinners Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Spinners</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"spinnersTime\" [spinners]=\"spinners\"></ngb-timepicker>\r\n\r\n            <button class=\"m-t-1 btn btn-outline-{{spinners ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSpinners()\">\r\n              Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Spinners Timepicker Ends-->\r\n\r\n    <!--Custom steps for Timepicker Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom steps</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-timepicker [(ngModel)]=\"stepsTime\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3\">\r\n                <label for=\"changeHourStep\">Hour Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\r\n              </div>\r\n              <div class=\"col-sm-3\">\r\n                <label for=\"changeMinuteStep\">Minute Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <label for=\"changeSecondStep\">Second Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <p>Selected time: {{stepsTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom steps for Timepicker Ends-->\r\n\r\n    <!--Timepicker Custom validation Starts-->\r\n    <div class=\"col-md-4 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom validation</h4>\r\n          <p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n              <ngb-timepicker [(ngModel)]=\"validationTime\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n              <div class=\"form-control-feedback\">\r\n                <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n                <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <p>Selected time: {{validationTime | json}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Timepicker Custom validation Ends-->\r\n  </div>\r\n</section>\r\n<!--Timepicker Starts-->"

/***/ }),

/***/ "./src/app/components/bootstrap/timepicker/timepicker.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bootstrap/timepicker/timepicker.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/timepicker/timepicker.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/timepicker/timepicker.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        // Variable Declaration
        this.meridian = true;
        this.time = { hour: 13, minute: 30, second: 30 };
        this.meridianTime = { hour: 13, minute: 30, second: 30 };
        this.secondsTime = { hour: 13, minute: 30, second: 30 };
        this.spinnersTime = { hour: 13, minute: 30, second: 30 };
        this.stepsTime = { hour: 13, minute: 30, second: 30 };
        this.validationTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.spinners = true;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    // Using for Meridian
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    // Using for Seconds  
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    // Using for Spinners
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/app/components/bootstrap/timepicker/timepicker.component.html"),
            styles: [__webpack_require__(/*! ./timepicker.component.scss */ "./src/app/components/bootstrap/timepicker/timepicker.component.scss")]
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/tooltip/tooltip.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/tooltip/tooltip.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Tooltip Starts-->\r\n<section id=\"tooltio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Tooltips</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Quick and easy tooltips Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Quick and easy tooltips</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n            Tooltip on top\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n            Tooltip on right\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-success mr-1 mb-1\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n            Tooltip on bottom\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n            Tooltip on left\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Quick and easy tooltips Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--HTML and bindings in tooltips Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">HTML and bindings in tooltips</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <p>Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in\r\n              a <code>&lt;template&gt;</code> element.</p>\r\n\r\n            <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" [ngbTooltip]=\"tipContent\">\r\n            I've got markup and bindings in my tooltip!\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--HTML and bindings in tooltips Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Custom and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Custom and manual triggers</h4>\r\n          <p> You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code>          property.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\r\n              Click me!\r\n            </button>\r\n\r\n            <p class=\"pt-3\">\r\n              Alternatively you can take full manual control over tooltip opening / closing events.\r\n            </p>\r\n\r\n            <button type=\"button\" class=\"btn btn-outline-info mr-2\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\"\r\n              (click)=\"t.open()\">\r\n              Click me to open a tooltip\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"t.close()\">\r\n              Click me to close a tooltip\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Custom and manual triggers Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Context and manual triggers Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Context and manual triggers</h4>\r\n          <p> You can optionally pass in a context when manually triggering a popover.</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n            <p>\r\n              How would you like to greet <strong [ngbTooltip]=\"tipContent\" #x=\"ngbTooltip\" triggers=\"manual\">me</strong>?\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n            French\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n            German\r\n          </button>\r\n            <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n            English\r\n          </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Context and manual triggers Ends-->\r\n  </div>\r\n  <div class=\"row\">\r\n    <!--Append tooltip in the body Starts-->\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Append tooltip in the body</h4>\r\n          <p>Set the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering\r\n            element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its\r\n            contents (i.e. <code>overflow: hidden</code>).</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\" style=\"padding: 50px 0; text-align: center; overflow:hidden\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n                Default tooltip\r\n              </button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              container=\"body\">\r\n                Tooltip appended to body\r\n              </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Append tooltip in the body Ends-->\r\n  </div>\r\n</section>\r\n<!--Tooltip Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/tooltip/tooltip.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/bootstrap/tooltip/tooltip.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bootstrap/tooltip/tooltip.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bootstrap/tooltip/tooltip.component.ts ***!
  \*******************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('x'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"])
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/components/bootstrap/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/components/bootstrap/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/components/bootstrap/typeahead/typeahead.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/typeahead/typeahead.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Typeahead Starts-->\r\n<section id=\"typeahead\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Typeahead</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Basic Typeahead Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Simple Typeahead</h4>\r\n          <p> A typeahead example that gets values from a static <code>string[]</code></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ul>\r\n              <li><code>debounceTime</code> operator</li>\r\n              <li>kicks in only if 2+ characters typed</li>\r\n              <li>limits to 10 results</li>\r\n            </ul>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ model | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Basic Typeahead Ends-->\r\n\r\n    <!--Wikipedia search Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Wikipedia search</h4>\r\n          <p> A typeahead example that gets values from the <code>WikipediaService</code></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ul>\r\n              <li>remote data retrieval</li>\r\n              <li><code>debounceTime</code> operator</li>\r\n              <li><code>do</code> operator</li>\r\n              <li><code>distinctUntilChanged</code> operator</li>\r\n              <li><code>switchMap</code> operator</li>\r\n              <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\r\n            </ul>\r\n\r\n            <div class=\"form-group\" [class.has-danger]=\"searchFailed\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelWiki\" [ngbTypeahead]=\"searchWiki\" placeholder=\"Search for alabama\"\r\n              />\r\n              <span *ngIf=\"searching\">searching...</span>\r\n              <div class=\"form-control-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n            </div>\r\n\r\n            <p>Model: {{ modelWiki | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Wikipedia search Ends-->\r\n  </div>\r\n  <div class=\"row\" matchHeight =\"card\">\r\n    <!--Formatted results Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Formatted results</h4>\r\n          <p>A typeahead example that uses a formatter function for string results</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control format mb-3\" [(ngModel)]=\"modelFormat\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\"\r\n              placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ modelFormat | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Formatted results Ends-->\r\n\r\n    <!--Template for results Starts-->\r\n    <div class=\"col-md-12 col-lg-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title\">Template for results</h4>\r\n          <p>A typeahead example that uses custom template for results display and uses object as a model</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n              <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\"> {{ r.name}}\r\n            </ng-template>\r\n            <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"modelTemp\" [ngbTypeahead]=\"searchFlags\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter1\"\r\n              placeholder=\"Search for alabama\" />\r\n            </div>\r\n            <p>Model: {{ modelTemp | json }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Template for results Ends-->\r\n  </div>\r\n</section>\r\n<!--Typeahead Ends-->"

/***/ }),

/***/ "./src/app/components/bootstrap/typeahead/typeahead.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/bootstrap/typeahead/typeahead.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.format {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/components/bootstrap/typeahead/typeahead.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/bootstrap/typeahead/typeahead.component.ts ***!
  \***********************************************************************/
/*! exports provided: WikipediaService, TypeaheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadComponent", function() { return TypeaheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// State constant declaration
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
// State Flags constant declaration
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    { 'name': 'Georgia', 'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());

var TypeaheadComponent = /** @class */ (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function () { return function () { return _this.searching = false; }; });
        // Default Search
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        // Wiki Search
        this.searchWiki = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        // Formatter 
        this.formatter = function (result) { return result.toUpperCase(); };
        this.formatter1 = function (x) { return x.name; };
        // Flag search
        this.searchFlags = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
    }
    TypeaheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typeahead',
            template: __webpack_require__(/*! ./typeahead.component.html */ "./src/app/components/bootstrap/typeahead/typeahead.component.html"),
            styles: [__webpack_require__(/*! ./typeahead.component.scss */ "./src/app/components/bootstrap/typeahead/typeahead.component.scss")],
            providers: [WikipediaService]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/cropper/cropper.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/extra/cropper/cropper.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Image Cropper</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Cropper starts -->\r\n<section id=\"tours\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Cropper</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"file-upload mb-3\">\r\n            <span class=\"text\">Upload File : </span>\r\n            <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\r\n          </div>\r\n          <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\" class=\"float-left mr-4\"></img-cropper>\r\n          <br>\r\n          <span class=\"result\" *ngIf=\"data.image\">\r\n            <img [src]=\"data.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\" class=\"rounded-circle\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Cropper Ends -->\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/components/extra/cropper/cropper.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/extra/cropper/cropper.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/cropper/cropper.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/cropper/cropper.component.ts ***!
  \***************************************************************/
/*! exports provided: CropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperComponent", function() { return CropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CropperComponent = /** @class */ (function () {
    function CropperComponent() {
        this.cropperSettings = new ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        this.cropperSettings.croppedWidth = 100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 600;
        this.cropperSettings.canvasHeight = 400;
        this.cropperSettings.noFileInput = true;
        this.data = {};
    }
    CropperComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cropper', undefined),
        __metadata("design:type", ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"])
    ], CropperComponent.prototype, "cropper", void 0);
    CropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cropper',
            template: __webpack_require__(/*! ./cropper.component.html */ "./src/app/components/extra/cropper/cropper.component.html"),
            styles: [__webpack_require__(/*! ./cropper.component.scss */ "./src/app/components/extra/cropper/cropper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CropperComponent);
    return CropperComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/drag-drop/drag-drop.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/extra/drag-drop/drag-drop.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Drag and Drop</div>\r\n    <p class=\"content-sub-header\">Simple angular drag and drop with dragula.</p>\r\n  </div>\r\n</div>\r\n<!-- Drap and Drop Starts -->\r\n<section id=\"dragndrop\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n\r\n      <h4>Basic Drag and Drop</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"first-bag\"'>\r\n                <div>You can move these elements between these two containers</div>\r\n                <div>Moving them anywhere else isn't quite possible</div>\r\n                <div>There's also the possibility of moving elements around in the same container, changing their position\r\n                </div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"first-bag\"'>\r\n                <div>This is the default use case. You only need to specify the containers you want to use</div>\r\n                <div>More interactive use cases lie ahead</div>\r\n                <div>Make sure to check out the\r\n                  <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Sort the items</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily\r\n              sort the items in any containers by just dragging and dropping.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"third-bag\"' [dragulaOptions]=\"thirdOptions\">\r\n                <div>Banana Boat</div>\r\n                <div>Orange Juice</div>\r\n                <div>Cuban Cigar</div>\r\n                <div>Terrible Comedian</div>\r\n                <div>Anxious Cab Driver</div>\r\n                <div>Thriving Venture</div>\r\n                <div>Calm Clam</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Drag and Drop Events</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class=\"parent\">\r\n            <label for=\"hy\">There are plenty of events along the lifetime of a drag event.\r\n              <a href=\"https://github.com/bevacqua/dragula#drakeon-events\">all of them</a> in the docs!</label>\r\n            <div class=\"drag-drop-wrapper\">\r\n              <div class=\"drag-drop-container\" [dragula]=\"'second-bag'\">\r\n                <div>As soon as you start dragging an element, a\r\n                  <code>drag</code> event is fired</div>\r\n                <div>Whenever an element is cloned because\r\n                  <code>copy: true</code>, a\r\n                  <code>cloned</code> event fires</div>\r\n                <div>The\r\n                  <code>shadow</code> event fires whenever the placeholder showing where an element would be dropped is moved\r\n                  to a different container or position</div>\r\n                <div>A\r\n                  <code>drop</code> event is fired whenever an element is dropped anywhere other than its origin\r\n                  <em>(where it was initially dragged from)</em>\r\n                </div>\r\n              </div>\r\n              <div class=\"drag-drop-container\" [dragula]=\"'second-bag'\">\r\n                <div>If the element gets removed from the DOM as a result of dropping outside of any containers, a\r\n                  <code>remove</code> event gets fired</div>\r\n                <div>A\r\n                  <code>cancel</code> event is fired when an element would be dropped onto an invalid target, but retains\r\n                  its original placement instead\r\n                </div>\r\n                <div>The\r\n                  <code>over</code> event fires when you drag something over a container, and\r\n                  <code>out</code> fires when you drag it away from the container</div>\r\n                <div>Lastly, a\r\n                  <code>dragend</code> event is fired whenever a drag operation ends, regardless of whether it ends in a\r\n                  cancellation, removal, or drop</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Drag and Drop using Handle</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Drag handles float your cruise?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"sixth-bag\"' [dragulaOptions]=\"sixthOptions\">\r\n                <div>\r\n                  <span class='handle'>+</span>Move me, but you can use the plus sign to drag me around.</div>\r\n                <div>\r\n                  <span class='handle'>+</span>Note that\r\n                  <code>handle</code> element in the\r\n                  <code>moves</code> handler is just the original event target.\r\n                </div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"sixth-bag\"' [dragulaOptions]=\"sixthOptions\">\r\n                <div>\r\n                  <span class='handle'>+</span>This might also be useful if you want multiple children of an element to be\r\n                  able to trigger a drag event.\r\n                </div>\r\n                <div>\r\n                  <span class='handle'>+</span>You can also use the\r\n                  <code>moves</code> option to determine whether an element can be dragged at all from a container,\r\n                  <em>drag handle or not</em>.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>There are a few similar mechanisms to determine whether an element can be dragged from a certain container\r\n              <a href='https://github.com/bevacqua/dragula#optionsmoves'>(\r\n                <code>moves</code>)</a>, whether an element can be dropped into a certain container at a certain\r\n              position\r\n              <a href='https://github.com/bevacqua/dragula#optionsaccepts'>(\r\n                  <code>accepts</code>)</a>, and whether an element is able to originate a drag event\r\n              <a href='https://github.com/bevacqua/dragula#optionsinvalid'>(\r\n                  <code>invalid</code>)</a>.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Angular Specific</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>\r\n              <strong>Angular-specific example.</strong> Fancy some nested\r\n              <code>ngFor</code>?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container text-center' *ngFor='let group of groups' [dragula]=\"'nested-bag'\">\r\n                <span>{{group.name}}</span>\r\n                <div *ngFor='let item of group.items' [innerHtml]='item.name'></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Angular Specific With Output</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>\r\n              <strong>Angular-specific example.</strong> Fancy some\r\n              <code>ngFor</code>?</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"another-bag\"' [dragulaModel]='many'>\r\n                <div *ngFor='let text of many' [innerHtml]='text'></div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"another-bag\"' [dragulaModel]='many2'>\r\n                <div *ngFor='let text of many2' [innerHtml]='text'></div>\r\n              </div>\r\n            </div>\r\n            <p class=\"mt-3\">Output :</p>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container'>\r\n                <pre>{{many | json}}</pre>\r\n              </div>\r\n              <div class='drag-drop-container'>\r\n                <pre>{{many2 | json}}</pre>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Revert On Spill</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>By default, dropping an element outside of any known containers will keep the element in the last place it went\r\n              over. You can make elements go back to origin if they're dropped outside of known containers, too.\r\n            </label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"fourth-bag\"' [dragulaOptions]=\"fourthOptions\">\r\n                <div>Moving items between containers works as usual</div>\r\n                <div>If you try to drop an item outside of any containers, though, it'll retain its original position</div>\r\n                <div>When that happens, a\r\n                  <code>cancel</code> event will be raised</div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"fourth-bag\"' [dragulaOptions]=\"fourthOptions\">\r\n                <div>Note that the dragged element will go back to the place you originally dragged it from, even if you move\r\n                  it over other containers\r\n                </div>\r\n                <div>This is useful if you want to ensure drop events only happen when the user intends for them to happen explicitly,\r\n                  avoiding surprises\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Copy Dragged Element</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label for='hy'>Copying stuff is common too, so we made it easy for you.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"fifth-bag\"' [dragulaOptions]=\"fifthOptions\">\r\n                <div>When elements are copyable, they can't be sorted in their origin container</div>\r\n                <div>Copying prevents original elements from being dragged. A copy gets created and\r\n                  <em>that</em> gets dragged instead\r\n                </div>\r\n                <div>Whenever that happens, a\r\n                  <code>cloned</code> event is raised</div>\r\n              </div>\r\n              <div class='drag-drop-container' [dragula]='\"fifth-bag\"' [dragulaOptions]=\"fifthOptions\">\r\n                <div>Note that the clones get destroyed if they're not dropped into another container</div>\r\n                <div>You'll be dragging a copy, so when they're dropped into another container you'll see the duplication.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Click or Drag</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class='parent'>\r\n            <label>\r\n              <strong>Click or Drag!</strong> Fires a click when the mouse button is released before a\r\n              <code>mousemove</code> event, otherwise a drag event is fired. No extra configuration is necessary.</label>\r\n            <div class='drag-drop-wrapper'>\r\n              <div class='drag-drop-container' [dragula]='\"seventh-bag\"'>\r\n                <div (click)='onclick(\"one\")'>{{clicked.one ? \"Clicked!\" : \"Clicking on these elements triggers a regular click event you can listen to.\"}}</div>\r\n                <div (click)='onclick(\"two\")'>{{clicked.two ? \"Clicked!\" : \"Try dragging or clicking on this element.\"}}</div>\r\n                <div (click)='onclick(\"three\")'>{{clicked.three ? \"Clicked!\" : \"Note how you can click normally?\"}}</div>\r\n                <div (click)='onclick(\"four\")'>{{clicked.four ? \"Clicked!\" : \"Drags don't trigger click events.\"}}</div>\r\n                <div (click)='onclick(\"five\")'>{{clicked.five ? \"Clicked!\" : \"Clicks don't end up in a drag, either.\"}}</div>\r\n                <div (click)='onclick(\"six\")'>{{clicked.six ? \"Clicked!\" : \"This is useful if you have elements that can be both clicked or dragged.\"}}</div>\r\n                <div (click)='onclick(\"seven\")'>{{clicked.seven ? \"ZOMG, THAT TICKLES! PLEASE. STOP.\" : \"Business as usual.\"}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Drap and Drop Ends -->"

/***/ }),

/***/ "./src/app/components/extra/drag-drop/drag-drop.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/extra/drag-drop/drag-drop.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.drag-drop-wrapper {\n  display: table; }\n\n.drag-drop-container {\n  display: table-cell;\n  width: 48%;\n  border: 1px solid; }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.drag-drop-container > div,\n.gu-mirror {\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(0, 157, 160, 0.8);\n  color: #fff;\n  transition: opacity 0.4s ease-in-out; }\n\n.drag-drop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.drag-drop-container > div a {\n    color: #000; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.drag-drop-container .ex-moved {\n  background-color: rgba(255, 88, 107, 0.8); }\n\n.drag-drop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/components/extra/drag-drop/drag-drop.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/extra/drag-drop/drag-drop.component.ts ***!
  \*******************************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragDropComponent = /** @class */ (function () {
    function DragDropComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        this.groups = [
            {
                name: 'Group A',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'Group B',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
        this.thirdOptions = {
            removeOnSpill: true
        };
        this.fourthOptions = {
            revertOnSpill: true
        };
        this.fifthOptions = {
            copy: true
        };
        this.sixthOptions = {
            moves: function (el, container, handle) {
                // console.log(el, container);
                return handle.className === 'handle';
            }
        };
        this.clicked = {
            'one': false,
            'two': false,
            'three': false,
            'four': false,
            'five': false,
            'six': false,
            'seven': false
        };
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            // console.log(`over: ${value[0]}`);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    DragDropComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    DragDropComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    DragDropComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    DragDropComponent.prototype.onDrag = function (args) {
        var e = args[0];
        this.removeClass(e, 'ex-moved');
    };
    DragDropComponent.prototype.onDrop = function (args) {
        var e = args[0];
        this.addClass(e, 'ex-moved');
    };
    DragDropComponent.prototype.onOver = function (args) {
        var el = args[0];
        this.addClass(el, 'ex-over');
    };
    DragDropComponent.prototype.onOut = function (args) {
        var el = args[0];
        this.removeClass(el, 'ex-over');
    };
    DragDropComponent.prototype.onclick = function (key) {
        var _this = this;
        this.clicked[key] = true;
        setTimeout(function () {
            _this.clicked[key] = false;
        }, 2000);
    };
    DragDropComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
    };
    DragDropComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
    };
    DragDropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drag-drop',
            template: __webpack_require__(/*! ./drag-drop.component.html */ "./src/app/components/extra/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__(/*! ./drag-drop.component.scss */ "./src/app/components/extra/drag-drop/drag-drop.component.scss")],
            providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"]])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/editor/editor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/editor/editor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Quill Editor</div>\r\n    <p class=\"content-sub-header\">quill editor with angular and TypeScript. ngx-quill is the new angular 2 and beyond implementation of ngQuill.</p>\r\n  </div>\r\n</div>\r\n<!-- Default Quill Editor starts -->\r\n<section id=\"quill-editor\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Default editor</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <quill-editor [style]=\"{height: '200px'}\" (onEditorCreated)=\"setFocus($event)\"></quill-editor>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Default Quill Editor Ends -->\r\n\r\n  <!-- Reactive forms Quill Editor starts -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Reactive Forms and patch value</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <form [formGroup]=\"form\">\r\n            <div class=\"mb-2\">\r\n              <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"hide=!(!!hide)\">hide / show</button>\r\n              <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"patchValue()\">patchValue</button>\r\n            </div>\r\n            <quill-editor #editor [style.display]=\"hide ? 'none' : 'block'\" formControlName=\"editor\"></quill-editor>\r\n            <p class=\"mt-2\">\r\n              Output : {{form.controls.editor.value}}\r\n            </p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Reactive forms Quill Editor ends -->\r\n\r\n  <!-- Quill Editor without toolbar starts -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h4>Editor without toolbar + required and ngModule</h4>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <div class=\"mb-2\">\r\n            <button (click)=\"toggleReadOnly()\" class=\"btn btn-raised btn-primary\">Toggle ReadOnly</button>\r\n          </div>\r\n          <quill-editor [(ngModel)]=\"title\" [maxLength]=\"5\" [minLength]=\"3\" [required]=\"true\" [readOnly]=\"isReadOnly\" [modules]=\"{toolbar: false}\"\r\n            (onContentChanged)=\"logChange($event);\" (onSelectionChanged)=\"logSelection($event);\"></quill-editor>\r\n          <p class=\"mt-2\">\r\n            isReadOnly : {{isReadOnly}} <br> Title : {{title}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Quill Editor without toolbar ends -->\r\n</section>"

/***/ }),

/***/ "./src/app/components/extra/editor/editor.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/editor/editor.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "quill-editor {\n  display: block; }\n\n.ng-invalid {\n  border: 1px dashed red; }\n"

/***/ }),

/***/ "./src/app/components/extra/editor/editor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/extra/editor/editor.component.ts ***!
  \*************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_quill_src_quill_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill/src/quill-editor.component */ "./node_modules/ngx-quill/src/quill-editor.component.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = /** @class */ (function () {
    function EditorComponent(fb) {
        //declarations
        this.title = 'Quill works!';
        this.hide = false;
        this.isReadOnly = false;
        this.form = fb.group({
            editor: ['test']
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.form
            .controls
            .editor
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            console.log('native fromControl value changes with debounce', data);
        });
        this.editor
            .onContentChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            console.log('view child + directly subscription', data);
        });
    };
    //events starts
    EditorComponent.prototype.setFocus = function ($event) {
        $event.focus();
    };
    EditorComponent.prototype.patchValue = function () {
        this.form.controls['editor'].patchValue(this.form.controls['editor'].value + " patched!");
    };
    EditorComponent.prototype.toggleReadOnly = function () {
        this.isReadOnly = !this.isReadOnly;
    };
    EditorComponent.prototype.logChange = function ($event) {
        //your code here
    };
    EditorComponent.prototype.logSelection = function ($event) {
        //your code here
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", ngx_quill_src_quill_editor_component__WEBPACK_IMPORTED_MODULE_2__["QuillEditorComponent"])
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/extra/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/components/extra/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/nouislider/nouislider.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/extra/nouislider/nouislider.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--NoUI Slider Starts-->\r\n<section id=\"slider-values\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">NoUI Slider</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--Single Value NoUI Slider Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Single Value</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [min]=\"someMin\" [max]=\"someMax\" [step]=\"0.05\" [(ngModel)]=\"someValue\"  [disabled]=\"disabled\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Single Value NoUI Slider Ends-->\r\n        \r\n        <!--Single Value NoUI Slider in form Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Single value (in &lt;form&gt;)</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <form [formGroup]=\"form1\">\r\n                                <nouislider [min]=\"0\" [max]=\"20\" [step]=\"0.5\" [formControl]=\"form1.controls.single\"></nouislider>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Single Value NoUI Slider in form Ends-->\r\n\r\n        <!--Range NoUI Slider Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"15\" [step]=\"1\" [(ngModel)]=\"someRange\"></nouislider>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>   \r\n        <!--Range NoUI Slider Ends-->\r\n\r\n        <!--Range NoUI Slider in form Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range (in &lt;form&gt;)</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <form [formGroup]=\"form2\">\r\n                                <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"10\" [step]=\"1\" [formControl]=\"form2.controls.range\"></nouislider>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Range NoUI Slider in form Ends-->\r\n\r\n        <!--Range NoUI Slider with config Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Range with config</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someRange2config\" [limit]=\"10\" [(ngModel)]=\"someRange2\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Range NoUI Slider with config Ends-->\r\n\r\n        <!--Keyboard support Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Keyboard support</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someKeyboardConfig\" [(ngModel)]=\"someKeyboard\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Keyboard support Ends-->\r\n\r\n        <!--With Custom Key Handler Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">With Custom Key Handler</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center mb-3\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someKeyboardConfig2\" [(ngModel)]=\"someKeyboard2\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--With Custom Key Handler Ends-->\r\n\r\n        <!--NoUI Slider with Tooltip Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">Tooltips</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [min]=\"0\" [max]=\"10\" [step]=\"0.05\" [(ngModel)]=\"someRange3\" [tooltips]=\"[ false, true ]\" style=\"margin-top: 4em;\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--NoUI Slider with Tooltip Ends-->\r\n\r\n        <!--NoUI Slider with Tooltip custom formatting Starts-->\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"card-title\">With custom formatting</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block text-center\">\r\n                        <div class=\"form-group\">\r\n                            <nouislider [config]=\"someTimeConfig\" [(ngModel)]=\"someTime\" style=\"margin-bottom: 5rem\"></nouislider>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--NoUI Slider with Tooltip custom formatting Ends-->\r\n    </div>\r\n</section>\r\n<!-- // Slider values section end -->"

/***/ }),

/***/ "./src/app/components/extra/nouislider/nouislider.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/extra/nouislider/nouislider.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/nouislider/nouislider.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/extra/nouislider/nouislider.component.ts ***!
  \*********************************************************************/
/*! exports provided: TimeFormatter, NouiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NouiSliderComponent", function() { return NouiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeFormatter = /** @class */ (function () {
    function TimeFormatter() {
    }
    TimeFormatter.prototype.to = function (value) {
        var h = Math.floor(value / 3600);
        var m = Math.floor(value % 3600 / 60);
        var s = value - 60 * m - 3600 * h;
        var values = [h, m, s];
        var timeString = '';
        var i = 0;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var v = values_1[_i];
            if (values[i] < 10)
                timeString += '0';
            timeString += values[i].toFixed(0);
            if (i < 2) {
                timeString += ':';
            }
            i++;
        }
        return timeString;
    };
    ;
    TimeFormatter.prototype.from = function (value) {
        var v = value.split(':').map(parseInt);
        var time = 0;
        time += v[0] * 3600;
        time += v[1] * 60;
        time += v[2];
        return time;
    };
    return TimeFormatter;
}());

var NouiSliderComponent = /** @class */ (function () {
    function NouiSliderComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        // Variable Declaration
        this.disabled = false;
        this.keyupLabelOn = false;
        this.keydownLabelOn = false;
        this.someValue = 5;
        this.someMin = -10;
        this.someMax = 10;
        this.someRange = [3, 7];
        this.someRange2 = [10, 15];
        this.someRange3 = [2, 8];
        this.someTime = 0;
        this.someRange2config = {
            behaviour: 'drag',
            connect: true,
            margin: 1,
            limit: 5,
            range: {
                min: 0,
                max: 20
            },
            pips: {
                mode: 'steps',
                density: 5
            }
        };
        // Keyboard Support
        this.someKeyboard = [1, 3];
        // Keyboard Support Configuration
        this.someKeyboardConfig = {
            behaviour: 'drag',
            connect: true,
            start: [0, 5],
            keyboard: true,
            step: 0.1,
            pageSteps: 10,
            range: {
                min: 0,
                max: 5
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            }
        };
        // With Custom Key Handler
        this.someKeyboard2 = [1, 3];
        // With Custom Key Handler Support
        this.someTimeConfig = {
            start: 86400 / 2,
            range: {
                min: 0,
                max: 86399
            },
            tooltips: new TimeFormatter(),
            step: 1
        };
        // EventHandler
        this.someKeyboard2EventHandler = function (e) {
            //your code here
            // determine which handle triggered the event
            var index = parseInt(e.target.getAttribute('data-handle'));
            var multiplier = 0;
            var stepSize = 0.1;
            switch (e.which) {
                case 40: // ArrowDown
                case 37:// ArrowLeft
                    multiplier = -2;
                    e.preventDefault();
                    break;
                case 38: // ArrowUp
                case 39:// ArrowRight
                    multiplier = 3;
                    e.preventDefault();
                    break;
                default:
                    break;
            }
            var delta = multiplier * stepSize;
            var newValue = [].concat(_this.someKeyboard2);
            newValue[index] += delta;
            _this.someKeyboard2 = newValue;
        };
        this.someKeyboardConfig2 = {
            behaviour: 'drag',
            connect: true,
            start: [0, 5],
            step: 0.1,
            range: {
                min: 0,
                max: 5
            },
            pips: {
                mode: 'count',
                density: 2,
                values: 6,
                stepped: true
            },
            keyboard: true,
            onKeydown: this.someKeyboard2EventHandler,
        };
    }
    NouiSliderComponent.prototype.ngOnInit = function () {
        this.form1 = this.formBuilder.group({ 'single': [10] });
        this.form2 = this.formBuilder.group({ 'range': [[2, 8]] });
    };
    NouiSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nouislider',
            template: __webpack_require__(/*! ./nouislider.component.html */ "./src/app/components/extra/nouislider/nouislider.component.html"),
            styles: [__webpack_require__(/*! ./nouislider.component.scss */ "./src/app/components/extra/nouislider/nouislider.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NouiSliderComponent);
    return NouiSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/extra/sweet-alerts/sweet-alerts.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- // Basic example section Starts -->\r\n<section id=\"basic-examples\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">SweetAlert</div>\r\n            <p class=\"content-sub-header\">SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"basic-alert\" (click)=\"basicAlert()\">Basic</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"with-title\" (click)=\"withTitle()\">With Title</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-12\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"html-alert\" (click)=\"htmlAlert()\">HTML</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Basic example section end -->\r\n\r\n<!-- Types section start -->\r\n<section id=\"types\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Types</div>\r\n            <p class=\"content-sub-header\">The type of the modal. SweetAlert comes with 5 built-in types which will show a corresponding icon animation: \"warning\", \"error\", \"success\" \"info\" and \"question\". You can also set it as \"input\" to get a prompt modal. It can either be put in the object under the key \"type\" or passed as the third parameter of the function.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-raised btn-block mb-5\" id=\"type-question\" (click)=\"typeQuestion()\">Question</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-success btn-raised btn-block mb-5\" id=\"type-success\" (click)=\"typeSuccess()\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-info btn-raised btn-block mb-5\" id=\"type-info\" (click)=\"typeInfo()\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-warning btn-raised btn-block mb-5\" id=\"type-warning\" (click)=\"typeWarning()\">Warning</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-12\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-raised btn-block mb-5\" id=\"type-error\" (click)=\"typeError()\">Error</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Types section end -->\r\n\r\n\r\n<!-- Options section start -->\r\n<section id=\"options\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Options</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Custom Icon</h5>\r\n                        <p><code>imageUrl</code> is used to add a customized icon for the modal. Should contain a string with the path to the image.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"custom-icon\" (click)=\"customIcon()\">Custom Icon</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Auto Close Timer</h5>\r\n                        <p>A message with auto close timer. <code>timer</code> is default set to <code>null</code>. You can set timer in ms (milliseconds).</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"auto-close\" (click)=\"autoClose()\">Auto Close</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Allow Outside Click</h5>\r\n                        <p>If <code>allowOutsideClick</code> is set to <code>true</code>, the user can dismiss the modal by clicking outside it.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"outside-click\" (click)=\"outsideClick()\">Click Outside</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Ajax Request</h5>\r\n                        <p>Set <code>showLoaderOnConfirm</code> to true to disable the buttons and show that something is loading. AJAX request for example.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"ajax-request\" (click)=\"ajaxRequest()\">Ajax</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Button Options</h5>\r\n                        <p>Custom HTML description and buttons</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"custom-button\" (click)=\"customButton()\">Custom HTML and buttons</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Prompt Function</h5>\r\n                        <p>A replacement for the \"prompt\" function. You can set <code>type</code> as \"input\" to get a prompt modal.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"prompt-function\" (click)=\"promptFunction()\">Prompt</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Options section end -->\r\n\r\n<!-- Button Action option section start -->\r\n<section id=\"action-option\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Button Actions</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"row mt-1\">\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Confirm Button Action</h5>\r\n                        <p>A warning message, with a function attached to the \"Confirm\"-button.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"confirm-text\" (click)=\"confirmText()\">Confirm Text</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Confirm &amp; Cancel Button</h5>\r\n                        <p>Confirm and cancel button excecution options.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"confirm-cancel\" (click)=\"confirmCancelButton()\">Buttons Actions</button>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-sm-6 col-12\">\r\n                        <h5 class=\"mt-4\">Chaining modals</h5>\r\n                        <p>Changing modal on next button.</p>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-raised btn-block\" id=\"steps\" (click)=\"steps()\">Steps</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- // Button Confirm option section end -->"

/***/ }),

/***/ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/extra/sweet-alerts/sweet-alerts.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/extra/sweet-alerts/sweet-alerts.component.ts ***!
  \*************************************************************************/
/*! exports provided: SweetAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertsComponent", function() { return SweetAlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/sweet-alerts */ "./src/app/shared/data/sweet-alerts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SweetAlertsComponent = /** @class */ (function () {
    function SweetAlertsComponent() {
    }
    // Simple Alert
    SweetAlertsComponent.prototype.basicAlert = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["basicAlert"]();
    };
    // Alert with Title
    SweetAlertsComponent.prototype.withTitle = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["withTitle"]();
    };
    //  HTML Alert
    SweetAlertsComponent.prototype.htmlAlert = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["htmlAlert"]();
    };
    // Question Type Alert
    SweetAlertsComponent.prototype.typeQuestion = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["typeQuestion"]();
    };
    // Success Type Alert
    SweetAlertsComponent.prototype.typeSuccess = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["typeSuccess"]();
    };
    // Info Type Alert
    SweetAlertsComponent.prototype.typeInfo = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["typeInfo"]();
    };
    // Warning Type Alert
    SweetAlertsComponent.prototype.typeWarning = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["typeWarning"]();
    };
    // Error Type Alert
    SweetAlertsComponent.prototype.typeError = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["typeError"]();
    };
    // Custom Icon 
    SweetAlertsComponent.prototype.customIcon = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["customIcon"]();
    };
    // Auto close timer
    SweetAlertsComponent.prototype.autoClose = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["autoClose"]();
    };
    // Allow Outside Click
    SweetAlertsComponent.prototype.outsideClick = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["outsideClick"]();
    };
    // Ajax Request
    SweetAlertsComponent.prototype.ajaxRequest = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["ajaxRequest"]();
    };
    // Button Options
    SweetAlertsComponent.prototype.customButton = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["customButton"]();
    };
    // Prompt Function
    SweetAlertsComponent.prototype.promptFunction = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["promptFunction"]();
    };
    // Confirm Button Action
    SweetAlertsComponent.prototype.confirmText = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["confirmText"]();
    };
    // Confirm & Cancel Button
    SweetAlertsComponent.prototype.confirmCancelButton = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["confirmCancelButton"]();
    };
    // Chaining modals / Steps
    SweetAlertsComponent.prototype.steps = function () {
        _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__["steps"]();
    };
    SweetAlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweet-alerts',
            template: __webpack_require__(/*! ./sweet-alerts.component.html */ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.html"),
            styles: [__webpack_require__(/*! ./sweet-alerts.component.scss */ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.scss")]
        })
    ], SweetAlertsComponent);
    return SweetAlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/switch/switch.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/switch/switch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"switch\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Switch</div>\r\n      <p class=\"content-sub-header\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Checked</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch checked></ui-switch>\r\n            <ui-switch [checked]=\"false\"></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Disabled</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch disabled></ui-switch>\r\n            <ui-switch checked [disabled]=\"true\"></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Two way binding</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch [(ngModel)]=\"enable\"></ui-switch> {{enable}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Change</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch (change)=\"onChange()\"></ui-switch> change count {{count}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Size</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch size=\"small\"></ui-switch>\r\n            <ui-switch></ui-switch>\r\n            <ui-switch size=\"large\"></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Reverse</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch reverse></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>color</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch></ui-switch>\r\n            <ui-switch color=\"blue\"></ui-switch>\r\n            <ui-switch color=\"red\"></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>switchColor</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <ui-switch switchColor=\"red\"></ui-switch>\r\n            <ui-switch switchColor=\"blue\"></ui-switch>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/components/extra/switch/switch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/switch/switch.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/switch/switch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/extra/switch/switch.component.ts ***!
  \*************************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.enable = true;
        this.count = 0;
    }
    SwitchComponent.prototype.ngOnInit = function () { };
    SwitchComponent.prototype.onSubmit = function () { };
    SwitchComponent.prototype.onChange = function () {
        this.count++;
    };
    SwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/components/extra/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.scss */ "./src/app/components/extra/switch/switch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/tags-input/tags-input.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/extra/tags-input/tags-input.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"tags\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mt-3 mb-1\">\r\n      <div class=\"content-header\">Input Tags</div>\r\n      <p class=\"content-sub-header\"></p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Simple Input with two items</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [(ngModel)]=\"items\" (onSelect)=\"onSelect($event)\" [modelAsStrings]=\"true\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Simple Input with not removable items</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"items1\" [removable]=\"false\"></tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Simple Input with editable items</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [(ngModel)]=\"items2\" [editable]=\"true\" (onTagEdited)=\"onTagEdited($event)\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>An input which requires all tags to start with '@' and end with '$'</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"['@item']\" [errorMessages]=\"errorMessages\" [validators]=\"validators\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>An input which will transform the value of all added tags prepending '@' to the tag</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"['@item']\" [onAdding]=\"transform\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Tags accepting only items from an autocomplete</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"['@item']\" [onlyFromAutocomplete]=\"true\">\r\n              <tag-input-dropdown [showDropdownIfEmpty]=\"true\" [focusFirstElement]=\"true\" [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\">\r\n                <ng-template let-item=\"item\" let-index=\"index\">\r\n                  ({{ index }}) {{ item.id }}: {{ item.value }}\r\n                </ng-template>\r\n              </tag-input-dropdown>\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Tags dropdown with last provided</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"[]\" [placeholder]=\"'Enter a new repo'\" [secondaryPlaceholder]=\"'Search in Github'\" [onlyFromAutocomplete]=\"true\">\r\n              <tag-input-dropdown [autocompleteObservable]=\"requestAutocompleteItems\">\r\n                <ng-template let-item=\"item\" let-index=\"index\" let-last=\"last\">\r\n                  ({{ index }}) {{ item.id }}: {{ item.value }} # {{ last }}\r\n                </ng-template>\r\n              </tag-input-dropdown>\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>An input which allows adding items by pressing the key \"space\" of your keyboard</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"['@item']\" [inputClass]=\"'myinput'\" [inputId]=\"'myinputId'\" [separatorKeyCodes]=\"[32, 188]\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Tags with Bootstrap theme</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [theme]=\"'bootstrap'\" [ngModel]=\"['@item']\" name=\"items\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Disabled tag input</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            Disable:\r\n            <input type=\"checkbox\" [(ngModel)]=\"disabled\" />\r\n\r\n            <tag-input [ngModel]=\"items3\" [disabled]=\"disabled\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Drag and drop</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [(ngModel)]=\"dragAndDropExample\" [modelAsStrings]=\"true\" [dragZone]=\"'zone1'\" [editable]=\"true\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Confirm adding and removing tags with Observables</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <tag-input [ngModel]=\"['item1']\" [dragZone]=\"'zone1'\" [modelAsStrings]=\"true\" [onRemoving]=\"onRemoving\" [onAdding]=\"onAdding\">\r\n            </tag-input>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/extra/tags-input/tags-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/extra/tags-input/tags-input.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/tags-input/tags-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/extra/tags-input/tags-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: TagsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInputComponent", function() { return TagsInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagsInputComponent = /** @class */ (function () {
    function TagsInputComponent(http) {
        var _this = this;
        this.http = http;
        this.disabled = true;
        this.items = ['Javascript', 'Typescript'];
        this.items1 = ['Javascript', 'Typescript'];
        this.items2 = ['Javascript', 'Typescript'];
        this.items3 = ['Javascript', 'Typescript'];
        this.inputText = 'text';
        this.itemsAsObjects = [{ id: 0, name: 'Angular', readonly: true }, { id: 1, name: 'React' }];
        this.autocompleteItems = ['Item1', 'item2', 'item3'];
        this.autocompleteItemsAsObjects = [
            { value: 'Item1', id: 0, extra: 0 },
            { value: 'item2', id: 1, extra: 1 },
            'item3'
        ];
        this.dragAndDropExample = ['C#', 'Java'];
        this.dragAndDropObjects = [{ display: 'Javascript', value: 'Javascript' }, { display: 'Typescript', value: 'Typescript' }];
        this.dragAndDropStrings = ['CoffeScript', 'Scala.js'];
        //     public requestAutocompleteItems = (text: string): Observable<HttpResponse<Config>> => {
        //       const url = `https://api.github.com/search/repositories?q=${text}`;
        //       return this.http
        //           .get(url)
        //           .map(data => data.json().items.map(item => item.full_name));
        //   };
        this.requestAutocompleteItems = function (text) {
            var url = "https://api.github.com/search/repositories?q=" + text;
            return _this.http
                .get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.json().items.map(function (item) { return item.full_name; }); }));
        };
        this.requestAutocompleteItemsFake = function (text) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
                'item1', 'item2', 'item3'
            ]);
        };
        this.options = {
            readonly: undefined,
            placeholder: '+ Tag'
        };
        this.asyncErrorMessages = {
            isNan: 'Please only add numbers'
        };
        this.validators = [this.startsWithAt, this.endsWith$];
        this.asyncValidators = [this.validateAsync];
        this.errorMessages = {
            'startsWithAt@': 'Your items need to start with \'@\'',
            'endsWith$': 'Your items need to end with \'$\''
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]().group({
            chips: [['chip'], []]
        });
    }
    TagsInputComponent.prototype.onAdd = function (item) {
        console.log('tag added: value is ' + item);
    };
    TagsInputComponent.prototype.onRemove = function (item) {
        console.log('tag removed: value is ' + item);
    };
    TagsInputComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is ' + item);
    };
    TagsInputComponent.prototype.onFocus = function (item) {
        console.log('input focused: current value is ' + item);
    };
    TagsInputComponent.prototype.onTextChange = function (text) {
        console.log('text changed: value is ' + text);
    };
    TagsInputComponent.prototype.onBlur = function (item) {
        console.log('input blurred: current value is ' + item);
    };
    TagsInputComponent.prototype.onTagEdited = function (item) {
        console.log('tag edited: current value is ' + item);
    };
    TagsInputComponent.prototype.onValidationError = function (item) {
        console.log('invalid tag ' + item);
    };
    TagsInputComponent.prototype.transform = function (value) {
        var item = { display: "@" + value, value: "@" + value };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(item);
    };
    TagsInputComponent.prototype.startsWithAt = function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    };
    TagsInputComponent.prototype.endsWith$ = function (control) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }
        return null;
    };
    TagsInputComponent.prototype.validateAsync = function (control) {
        return new Promise(function (resolve) {
            var value = control.value;
            var result = isNaN(value) ? {
                isNan: true
            } : null;
            setTimeout(function () {
                resolve(result);
            }, 1);
        });
    };
    TagsInputComponent.prototype.onAdding = function (tag) {
        var confirm = window.confirm('Do you really want to add this tag?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tag)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    TagsInputComponent.prototype.onRemoving = function (tag) {
        var confirm = window.confirm('Do you really want to remove this tag?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tag)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    TagsInputComponent.prototype.asyncOnAdding = function (tag) {
        var confirm = window.confirm('Do you really want to add this tag?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tag)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return confirm; }));
    };
    TagsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags-input',
            template: __webpack_require__(/*! ./tags-input.component.html */ "./src/app/components/extra/tags-input/tags-input.component.html"),
            styles: [__webpack_require__(/*! ./tags-input.component.scss */ "./src/app/components/extra/tags-input/tags-input.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], TagsInputComponent);
    return TagsInputComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/toastr/toastr.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/toastr/toastr.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Toastr Starts-->\r\n<section id=\"toastr\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 mt-3 mb-1\">\r\n            <div class=\"content-header\">Toastr</div>\r\n            <p class=\"content-sub-header\">By default, the toastr will show up at top right corner of the page view, and will automatically dismiss in 3 seconds. You can configure the toasts using ToastOptions class.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Types section start -->\r\n    <section id=\"types\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title\">Types</div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row mt-1\">\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-block btn-raised mb-5\" id=\"type-success\" (click)=\"typeSuccess()\">Success</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-block btn-raised mb-5\" id=\"type-error\" (click)=\"typeError()\">Error</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-info btn-block btn-raised mb-5\" id=\"type-info\" (click)=\"typeInfo()\">Info</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-md-offset-1 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-warning btn-block btn-raised mb-5\" id=\"type-warning\" (click)=\"typeWarning()\">Warning</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-md-offset-1 text-center\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-block btn-raised mb-5\" id=\"type-custom\" (click)=\"typeCustom()\">Custom</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-md-offset-1 text-center\">                            \r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"progress-bar\" (click)=\"progressBar()\">With Progress Bar</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Types section end -->\r\n\r\n    <!-- Duration & Timeout section start -->\r\n    <section id=\"duration-timeout\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mt-3 mb-1\">\r\n                <div class=\"content-header\">Dissmiss Options</div>\r\n                <p class=\"content-sub-header\">Determine how a displayed toaster can be dismissed. Allowed values are: 'auto', 'click', 'controlled'.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5>Auto</h5>\r\n                            <p>Toaster will auto dismiss in miliseconds.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"timeout\" (click)=\"timeout()\">Show Toast</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5>Click</h5>\r\n                            <p>Toaster will be dismissed when user click on it.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"show-clear-toast\" (click)=\"dismissToastOnClick()\">Clear Toast on Click</button>\r\n                        </div>                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Duration & Timeout section end -->\r\n\r\n    <!-- Clear toasts section start -->\r\n    <section id=\"clear-toasts\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mt-3 mb-1\">\r\n                <div class=\"content-header\">Toast Options</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row mt-1\">\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Show Close Button</h5>\r\n                            <p>Determines whether toast should include 'x' close button. Defaults to false.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"close-button\" (click)=\"showCloseButton()\">With Close Icon</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Title Class</h5>\r\n                            <p>CSS class for title within toast.Adding <code>h3</code> class to title.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"title-class\" (click)=\"titleClass()\">Title Class</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Message Class</h5>\r\n                            <p>CSS class for message within toast. Adding <code>text-uppercase</code> class to message.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"message-class\" (click)=\"messageClass()\">Message Class</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-1\">                \r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Enable HTML</h5>\r\n                            <p>Allow input of message to be HTML. Default to false.</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"html-toast\" (click)=\"enableHtml()\">HTML Enabled</button>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-sm-12\">\r\n                            <h5 class=\"mt-4\">Clear</h5>\r\n                            <p>Remove current toasts</p>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-block btn-raised\" id=\"show-clear-toast\" (click)=\"clearToast()\">Clear Toast</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- // Clear toasts section end -->\r\n</section>\r\n<!--Toastr Ends-->"

/***/ }),

/***/ "./src/app/components/extra/toastr/toastr.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/toastr/toastr.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/toastr/toastr.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/extra/toastr/toastr.component.ts ***!
  \*************************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toastr.service */ "./src/app/components/extra/toastr/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(service) {
        this.service = service;
    }
    // Success Type
    ToastrComponent.prototype.typeSuccess = function () {
        this.service.typeSuccess();
    };
    // Success Type
    ToastrComponent.prototype.typeInfo = function () {
        this.service.typeInfo();
    };
    // Success Type
    ToastrComponent.prototype.typeWarning = function () {
        this.service.typeWarning();
    };
    // Success Type
    ToastrComponent.prototype.typeError = function () {
        this.service.typeError();
    };
    // Custom Type
    ToastrComponent.prototype.typeCustom = function () {
        this.service.typeCustom();
    };
    // Remove current toasts using animation
    ToastrComponent.prototype.clearToast = function () {
        this.service.clearToast();
    };
    // Show close button
    ToastrComponent.prototype.showCloseButton = function () {
        this.service.showCloseButton();
    };
    //progressBar
    ToastrComponent.prototype.progressBar = function () {
        this.service.progressBar();
    };
    //Dismiss toastr on click
    ToastrComponent.prototype.dismissToastOnClick = function () {
        this.service.dismissToastOnClick();
    };
    // Timeout
    ToastrComponent.prototype.timeout = function () {
        this.service.timeout();
    };
    // Enable HTML
    ToastrComponent.prototype.enableHtml = function () {
        this.service.enableHtml();
    };
    // Title Class
    ToastrComponent.prototype.titleClass = function () {
        this.service.titleClass();
    };
    // Message Class
    ToastrComponent.prototype.messageClass = function () {
        this.service.messageClass();
    };
    ToastrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toastr',
            template: __webpack_require__(/*! ./toastr.component.html */ "./src/app/components/extra/toastr/toastr.component.html"),
            styles: [__webpack_require__(/*! ./toastr.component.scss */ "./src/app/components/extra/toastr/toastr.component.scss")],
            providers: [_toastr_service__WEBPACK_IMPORTED_MODULE_1__["NGXToastrService"]]
        }),
        __metadata("design:paramtypes", [_toastr_service__WEBPACK_IMPORTED_MODULE_1__["NGXToastrService"]])
    ], ToastrComponent);
    return ToastrComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/toastr/toastr.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/extra/toastr/toastr.service.ts ***!
  \***********************************************************/
/*! exports provided: NGXToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXToastrService", function() { return NGXToastrService; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';


var NGXToastrService = /** @class */ (function () {
    function NGXToastrService(toastr) {
        this.toastr = toastr;
    }
    // Success Type
    NGXToastrService.prototype.typeSuccess = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    // Success Type
    NGXToastrService.prototype.typeInfo = function () {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort');
    };
    // Success Type
    NGXToastrService.prototype.typeWarning = function () {
        this.toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!');
    };
    // Success Type
    NGXToastrService.prototype.typeError = function () {
        this.toastr.error('I do not think that word means what you think it means.', 'Inconceivable!');
    };
    // Custom Type
    NGXToastrService.prototype.typeCustom = function () {
        this.toastr.success('<span style="color: red">Message in red.</span>', null, { enableHtml: true });
    };
    //Progress bar
    NGXToastrService.prototype.progressBar = function () {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "progressBar": true });
    };
    // Timeout
    NGXToastrService.prototype.timeout = function () {
        this.toastr.error('I do not think that word means what you think it means.', 'Timeout!', { "timeOut": 2000 });
    };
    //Dismiss toastr on Click
    NGXToastrService.prototype.dismissToastOnClick = function () {
        this.toastr.info('We do have the Kapua suite available.', 'Turtle Bay Resort', { "tapToDismiss": true });
    };
    // Remove current toasts using animation
    NGXToastrService.prototype.clearToast = function () {
        this.toastr.clear();
    };
    // Show close button
    NGXToastrService.prototype.showCloseButton = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { closeButton: true });
    };
    // Enable  HTML
    NGXToastrService.prototype.enableHtml = function () {
        this.toastr.info('<i>Have fun <b>storming</b> the castle!</i>', 'Miracle Max Says', { enableHtml: true });
    };
    // Title Class
    NGXToastrService.prototype.titleClass = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { titleClass: 'h3' });
    };
    // Message Class
    NGXToastrService.prototype.messageClass = function () {
        this.toastr.info('Have fun storming the castle!', 'Miracle Max Says', { messageClass: 'text-uppercase' });
    };
    NGXToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], NGXToastrService);
    return NGXToastrService;
}());



/***/ }),

/***/ "./src/app/components/extra/tour/tour.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/extra/tour/tour.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Tour</div>\r\n    <p class=\"content-sub-header\">Apex template tour</p>\r\n  </div>\r\n</div>\r\n<!-- Apex template tour starts -->\r\n<section id=\"tours\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>User Tour</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <p>Click this button to start a demo user Tour.</p>\r\n            <button id=\"btnStartTour\" class=\"btn btn-primary btn-raised\">Start Tour</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Define Your Steps</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <pre class=\"language-javascript\">\r\n<code class=\"language-javascript\">steps: [  \r\n    &#123;\r\n        title: \"Customizer\",\r\n        content: \"This is the customizer\",\r\n        target: \"customizer-toggle-icon\",\r\n        placement: \"left\"\r\n    },\r\n    &#123;\r\n        ...\r\n    }     \r\n]</code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-4 col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4>Initialize Tour</h4>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div>\r\n            <pre class=\"language-javascript\">\r\n<code class=\"language-javascript\">hopscotch.startTour(tour);</code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Apex template tour Ends -->\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/components/extra/tour/tour.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/extra/tour/tour.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra/tour/tour.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/extra/tour/tour.component.ts ***!
  \*********************************************************/
/*! exports provided: TourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourComponent", function() { return TourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TourComponent = /** @class */ (function () {
    function TourComponent() {
    }
    TourComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/hopscotch.min.js');
        $.getScript('./assets/js/tour.js');
        $.getScript('./assets/js/prism.min.js');
    };
    TourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tour',
            template: __webpack_require__(/*! ./tour.component.html */ "./src/app/components/extra/tour/tour.component.html"),
            styles: [__webpack_require__(/*! ./tour.component.scss */ "./src/app/components/extra/tour/tour.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TourComponent);
    return TourComponent;
}());



/***/ }),

/***/ "./src/app/components/extra/upload/upload.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/upload/upload.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--File Upload Starts-->\r\n<section id=\"file-upload\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">Angular2 File Upload</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n            class=\"py-5 mb-3 text-center font-medium-5 text-uppercase grey my-drop-zone\">\r\n            Base dropzone\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div ng2FileDrop [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\" (fileOver)=\"fileOverAnother($event)\" [uploader]=\"uploader\"\r\n            class=\"py-5 mb-3 text-center font-medium-5 text-uppercase grey my-drop-zone\">\r\n            Another dropzone\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <h4>Select files</h4>\r\n          <div>Multiple</div>\r\n          <label class=\"custom-file mb-3\">\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple >\r\n            <span class=\"custom-file-control\"></span>\r\n          </label>\r\n\r\n          <div>Single</div>\r\n          <label class=\"custom-file\">\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" >\r\n            <span class=\"custom-file-control\"></span>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-md-9\">\r\n          <h4>Upload queue</h4>\r\n          <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th width=\"50%\">Name</th>\r\n                <th>Size</th>\r\n                <th>Progress</th>\r\n                <th>Status</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                <td *ngIf=\"uploader.isHTML5\">\r\n                  <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <span *ngIf=\"item.isSuccess\"><i class=\"fa fa-ok\"></i></span>\r\n                  <span *ngIf=\"item.isCancel\"><i class=\"fa fa-ban\"></i></span>\r\n                  <span *ngIf=\"item.isError\"><i class=\"fa fa-remove\"></i></span>\r\n                </td>\r\n                <td nowrap>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-success btn-sm\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                  <span class=\"fa fa-upload\"></span> Upload\r\n                </button>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-warning btn-sm\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                  <span class=\"fa fa-ban\"></span> Cancel\r\n                </button>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-danger btn-sm\" (click)=\"item.remove()\">\r\n                  <span class=\"fa fa-trash\"></span> Remove\r\n                </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <div>\r\n            <p>Queue progress:\r\n              <ngb-progressbar type=\"primary\" [value]=\"uploader.progress\"></ngb-progressbar>\r\n            </p>\r\n            <button type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n              <span class=\"fa fa-upload\"></span> Upload all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-warning\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n              <span class=\"fa fa-ban\"></span> Cancel all\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n              <span class=\"fa fa-trash\"></span> Remove all\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--File Upload Ends-->"

/***/ }),

/***/ "./src/app/components/extra/upload/upload.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/extra/upload/upload.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-drop-zone {\n  border: dotted 3px lightgray;\n  background-color: #f5f7fa !important; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n"

/***/ }),

/***/ "./src/app/components/extra/upload/upload.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/extra/upload/upload.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    // Angular2 File Upload
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/extra/upload/upload.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/components/extra/upload/upload.component.scss")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/ui-components-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/ui-components-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UIComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponentsRoutingModule", function() { return UIComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bootstrap_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap/buttons/buttons.component */ "./src/app/components/bootstrap/buttons/buttons.component.ts");
/* harmony import */ var _bootstrap_lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap/lists/lists.component */ "./src/app/components/bootstrap/lists/lists.component.ts");
/* harmony import */ var _bootstrap_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap/alerts/alerts.component */ "./src/app/components/bootstrap/alerts/alerts.component.ts");
/* harmony import */ var _extra_sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extra/sweet-alerts/sweet-alerts.component */ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.ts");
/* harmony import */ var _extra_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra/toastr/toastr.component */ "./src/app/components/extra/toastr/toastr.component.ts");
/* harmony import */ var _extra_nouislider_nouislider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extra/nouislider/nouislider.component */ "./src/app/components/extra/nouislider/nouislider.component.ts");
/* harmony import */ var _bootstrap_badges_badges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap/badges/badges.component */ "./src/app/components/bootstrap/badges/badges.component.ts");
/* harmony import */ var _bootstrap_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap/dropdowns/dropdowns.component */ "./src/app/components/bootstrap/dropdowns/dropdowns.component.ts");
/* harmony import */ var _bootstrap_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap/input-groups/input-groups.component */ "./src/app/components/bootstrap/input-groups/input-groups.component.ts");
/* harmony import */ var _bootstrap_media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bootstrap/media-objects/media-objects.component */ "./src/app/components/bootstrap/media-objects/media-objects.component.ts");
/* harmony import */ var _bootstrap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap/pagination/pagination.component */ "./src/app/components/bootstrap/pagination/pagination.component.ts");
/* harmony import */ var _bootstrap_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bootstrap/progress/progress.component */ "./src/app/components/bootstrap/progress/progress.component.ts");
/* harmony import */ var _bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bootstrap/modals/modals.component */ "./src/app/components/bootstrap/modals/modals.component.ts");
/* harmony import */ var _bootstrap_collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bootstrap/collapse/collapse.component */ "./src/app/components/bootstrap/collapse/collapse.component.ts");
/* harmony import */ var _bootstrap_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bootstrap/accordion/accordion.component */ "./src/app/components/bootstrap/accordion/accordion.component.ts");
/* harmony import */ var _bootstrap_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bootstrap/carousel/carousel.component */ "./src/app/components/bootstrap/carousel/carousel.component.ts");
/* harmony import */ var _bootstrap_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bootstrap/datepicker/datepicker.component */ "./src/app/components/bootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var _bootstrap_popover_popover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bootstrap/popover/popover.component */ "./src/app/components/bootstrap/popover/popover.component.ts");
/* harmony import */ var _bootstrap_rating_rating_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bootstrap/rating/rating.component */ "./src/app/components/bootstrap/rating/rating.component.ts");
/* harmony import */ var _bootstrap_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bootstrap/tabs/tabs.component */ "./src/app/components/bootstrap/tabs/tabs.component.ts");
/* harmony import */ var _bootstrap_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bootstrap/timepicker/timepicker.component */ "./src/app/components/bootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var _bootstrap_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bootstrap/tooltip/tooltip.component */ "./src/app/components/bootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var _bootstrap_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bootstrap/typeahead/typeahead.component */ "./src/app/components/bootstrap/typeahead/typeahead.component.ts");
/* harmony import */ var _bootstrap_ng_buttons_ng_buttons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bootstrap/ng-buttons/ng-buttons.component */ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts");
/* harmony import */ var _extra_upload_upload_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./extra/upload/upload.component */ "./src/app/components/extra/upload/upload.component.ts");
/* harmony import */ var _extra_editor_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./extra/editor/editor.component */ "./src/app/components/extra/editor/editor.component.ts");
/* harmony import */ var _extra_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./extra/drag-drop/drag-drop.component */ "./src/app/components/extra/drag-drop/drag-drop.component.ts");
/* harmony import */ var _extra_tour_tour_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./extra/tour/tour.component */ "./src/app/components/extra/tour/tour.component.ts");
/* harmony import */ var _extra_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./extra/cropper/cropper.component */ "./src/app/components/extra/cropper/cropper.component.ts");
/* harmony import */ var _extra_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./extra/tags-input/tags-input.component */ "./src/app/components/extra/tags-input/tags-input.component.ts");
/* harmony import */ var _extra_switch_switch_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./extra/switch/switch.component */ "./src/app/components/extra/switch/switch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var routes = [
    {
        path: '',
        children: [
            {
                path: 'buttons',
                component: _bootstrap_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"],
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'lists',
                component: _bootstrap_lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"],
                data: {
                    title: 'Lists'
                }
            },
            {
                path: 'alerts',
                component: _bootstrap_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"],
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'sweetalerts',
                component: _extra_sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_5__["SweetAlertsComponent"],
                data: {
                    title: 'Sweet Alerts'
                }
            },
            {
                path: 'toastr',
                component: _extra_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_6__["ToastrComponent"],
                data: {
                    title: 'Toastr'
                }
            },
            {
                path: 'nouislider',
                component: _extra_nouislider_nouislider_component__WEBPACK_IMPORTED_MODULE_7__["NouiSliderComponent"],
                data: {
                    title: 'NoUI Slider'
                }
            },
            {
                path: 'editor',
                component: _extra_editor_editor_component__WEBPACK_IMPORTED_MODULE_27__["EditorComponent"],
                data: {
                    title: 'Quill Editor'
                }
            },
            {
                path: 'upload',
                component: _extra_upload_upload_component__WEBPACK_IMPORTED_MODULE_26__["UploadComponent"],
                data: {
                    title: 'Upload'
                }
            },
            {
                path: 'dragndrop',
                component: _extra_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_28__["DragDropComponent"],
                data: {
                    title: 'Drag and Drop'
                }
            },
            {
                path: 'tour',
                component: _extra_tour_tour_component__WEBPACK_IMPORTED_MODULE_29__["TourComponent"],
                data: {
                    title: 'Tour'
                }
            },
            {
                path: 'cropper',
                component: _extra_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_30__["CropperComponent"],
                data: {
                    title: 'Cropper'
                }
            },
            {
                path: 'badges',
                component: _bootstrap_badges_badges_component__WEBPACK_IMPORTED_MODULE_8__["BadgesComponent"],
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'dropdowns',
                component: _bootstrap_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"],
                data: {
                    title: 'Dropdowns'
                }
            },
            {
                path: 'inputgroups',
                component: _bootstrap_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_10__["InputGroupsComponent"],
                data: {
                    title: 'Input Groups'
                }
            },
            {
                path: 'media',
                component: _bootstrap_media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_11__["MediaObjectsComponent"],
                data: {
                    title: 'Media Objects'
                }
            },
            {
                path: 'pagination',
                component: _bootstrap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
                data: {
                    title: 'Pagination'
                }
            },
            {
                path: 'progress',
                component: _bootstrap_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__["ProgressBarsComponent"],
                data: {
                    title: 'Progress Bars'
                }
            },
            {
                path: 'models',
                component: _bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_14__["ModalsComponent"],
                data: {
                    title: 'Models'
                }
            },
            {
                path: 'collapse',
                component: _bootstrap_collapse_collapse_component__WEBPACK_IMPORTED_MODULE_15__["CollapseComponent"],
                data: {
                    title: 'Collapse'
                }
            },
            {
                path: 'accordion',
                component: _bootstrap_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_16__["AccordionComponent"],
                data: {
                    title: 'Accordion'
                }
            },
            {
                path: 'carousel',
                component: _bootstrap_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__["CarouselComponent"],
                data: {
                    title: 'Carousel'
                }
            },
            {
                path: 'datepicker',
                component: _bootstrap_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_18__["DatepickerComponent"],
                data: {
                    title: 'Datepicker'
                }
            },
            {
                path: 'popover',
                component: _bootstrap_popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"],
                data: {
                    title: 'Popovers'
                }
            },
            {
                path: 'rating',
                component: _bootstrap_rating_rating_component__WEBPACK_IMPORTED_MODULE_20__["RatingComponent"],
                data: {
                    title: 'Rating'
                }
            },
            {
                path: 'tabs',
                component: _bootstrap_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__["TabsComponent"],
                data: {
                    title: 'Tabs'
                }
            },
            {
                path: 'timepicker',
                component: _bootstrap_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_22__["TimepickerComponent"],
                data: {
                    title: 'Timepicker'
                }
            },
            {
                path: 'tooltip',
                component: _bootstrap_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_23__["TooltipComponent"],
                data: {
                    title: 'Tooltips'
                }
            },
            {
                path: 'typeahead',
                component: _bootstrap_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_24__["TypeaheadComponent"],
                data: {
                    title: 'Typeahead'
                }
            },
            {
                path: 'ng-buttons',
                component: _bootstrap_ng_buttons_ng_buttons_component__WEBPACK_IMPORTED_MODULE_25__["NgButtonsComponent"],
                data: {
                    title: 'Ngb-Bootstrap'
                }
            },
            {
                path: 'tags',
                component: _extra_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_31__["TagsInputComponent"],
                data: {
                    title: 'Tags'
                }
            },
            {
                path: 'switch',
                component: _extra_switch_switch_component__WEBPACK_IMPORTED_MODULE_32__["SwitchComponent"],
                data: {
                    title: 'Switch'
                }
            },
        ]
    }
];
var UIComponentsRoutingModule = /** @class */ (function () {
    function UIComponentsRoutingModule() {
    }
    UIComponentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UIComponentsRoutingModule);
    return UIComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/ui-components.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/ui-components.module.ts ***!
  \****************************************************/
/*! exports provided: UIComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIComponentsModule", function() { return UIComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_components_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-components-routing.module */ "./src/app/components/ui-components-routing.module.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _bootstrap_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bootstrap/buttons/buttons.component */ "./src/app/components/bootstrap/buttons/buttons.component.ts");
/* harmony import */ var _bootstrap_lists_lists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bootstrap/lists/lists.component */ "./src/app/components/bootstrap/lists/lists.component.ts");
/* harmony import */ var _bootstrap_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bootstrap/alerts/alerts.component */ "./src/app/components/bootstrap/alerts/alerts.component.ts");
/* harmony import */ var _extra_sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extra/sweet-alerts/sweet-alerts.component */ "./src/app/components/extra/sweet-alerts/sweet-alerts.component.ts");
/* harmony import */ var _extra_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extra/toastr/toastr.component */ "./src/app/components/extra/toastr/toastr.component.ts");
/* harmony import */ var _extra_nouislider_nouislider_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extra/nouislider/nouislider.component */ "./src/app/components/extra/nouislider/nouislider.component.ts");
/* harmony import */ var _bootstrap_badges_badges_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bootstrap/badges/badges.component */ "./src/app/components/bootstrap/badges/badges.component.ts");
/* harmony import */ var _bootstrap_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bootstrap/dropdowns/dropdowns.component */ "./src/app/components/bootstrap/dropdowns/dropdowns.component.ts");
/* harmony import */ var _bootstrap_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bootstrap/input-groups/input-groups.component */ "./src/app/components/bootstrap/input-groups/input-groups.component.ts");
/* harmony import */ var _bootstrap_media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bootstrap/media-objects/media-objects.component */ "./src/app/components/bootstrap/media-objects/media-objects.component.ts");
/* harmony import */ var _bootstrap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bootstrap/pagination/pagination.component */ "./src/app/components/bootstrap/pagination/pagination.component.ts");
/* harmony import */ var _bootstrap_progress_progress_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bootstrap/progress/progress.component */ "./src/app/components/bootstrap/progress/progress.component.ts");
/* harmony import */ var _bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bootstrap/modals/modals.component */ "./src/app/components/bootstrap/modals/modals.component.ts");
/* harmony import */ var _bootstrap_collapse_collapse_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bootstrap/collapse/collapse.component */ "./src/app/components/bootstrap/collapse/collapse.component.ts");
/* harmony import */ var _bootstrap_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bootstrap/accordion/accordion.component */ "./src/app/components/bootstrap/accordion/accordion.component.ts");
/* harmony import */ var _bootstrap_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bootstrap/carousel/carousel.component */ "./src/app/components/bootstrap/carousel/carousel.component.ts");
/* harmony import */ var _bootstrap_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./bootstrap/datepicker/datepicker.component */ "./src/app/components/bootstrap/datepicker/datepicker.component.ts");
/* harmony import */ var _bootstrap_popover_popover_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./bootstrap/popover/popover.component */ "./src/app/components/bootstrap/popover/popover.component.ts");
/* harmony import */ var _bootstrap_rating_rating_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./bootstrap/rating/rating.component */ "./src/app/components/bootstrap/rating/rating.component.ts");
/* harmony import */ var _bootstrap_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./bootstrap/tabs/tabs.component */ "./src/app/components/bootstrap/tabs/tabs.component.ts");
/* harmony import */ var _bootstrap_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./bootstrap/timepicker/timepicker.component */ "./src/app/components/bootstrap/timepicker/timepicker.component.ts");
/* harmony import */ var _bootstrap_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bootstrap/tooltip/tooltip.component */ "./src/app/components/bootstrap/tooltip/tooltip.component.ts");
/* harmony import */ var _bootstrap_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./bootstrap/typeahead/typeahead.component */ "./src/app/components/bootstrap/typeahead/typeahead.component.ts");
/* harmony import */ var _bootstrap_ng_buttons_ng_buttons_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./bootstrap/ng-buttons/ng-buttons.component */ "./src/app/components/bootstrap/ng-buttons/ng-buttons.component.ts");
/* harmony import */ var _extra_upload_upload_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./extra/upload/upload.component */ "./src/app/components/extra/upload/upload.component.ts");
/* harmony import */ var _extra_editor_editor_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./extra/editor/editor.component */ "./src/app/components/extra/editor/editor.component.ts");
/* harmony import */ var _extra_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./extra/drag-drop/drag-drop.component */ "./src/app/components/extra/drag-drop/drag-drop.component.ts");
/* harmony import */ var _extra_tour_tour_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./extra/tour/tour.component */ "./src/app/components/extra/tour/tour.component.ts");
/* harmony import */ var _extra_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./extra/cropper/cropper.component */ "./src/app/components/extra/cropper/cropper.component.ts");
/* harmony import */ var _extra_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./extra/tags-input/tags-input.component */ "./src/app/components/extra/tags-input/tags-input.component.ts");
/* harmony import */ var _extra_switch_switch_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./extra/switch/switch.component */ "./src/app/components/extra/switch/switch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { HttpClientModule } from '@angular/common/http';

































var UIComponentsModule = /** @class */ (function () {
    function UIComponentsModule() {
    }
    UIComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_components_routing_module__WEBPACK_IMPORTED_MODULE_3__["UIComponentsRoutingModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["JsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_9__["DragulaModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_10__["MatchHeightModule"],
                ng2_img_cropper__WEBPACK_IMPORTED_MODULE_11__["ImageCropperModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                // HttpClientModule,
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__["UiSwitchModule"]
            ],
            declarations: [
                _bootstrap_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_14__["ButtonsComponent"],
                _bootstrap_lists_lists_component__WEBPACK_IMPORTED_MODULE_15__["ListsComponent"],
                _bootstrap_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_16__["AlertsComponent"],
                _extra_sweet_alerts_sweet_alerts_component__WEBPACK_IMPORTED_MODULE_17__["SweetAlertsComponent"],
                _extra_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_18__["ToastrComponent"],
                _extra_nouislider_nouislider_component__WEBPACK_IMPORTED_MODULE_19__["NouiSliderComponent"],
                _bootstrap_badges_badges_component__WEBPACK_IMPORTED_MODULE_20__["BadgesComponent"],
                _bootstrap_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_21__["DropdownsComponent"],
                _bootstrap_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_22__["InputGroupsComponent"],
                _bootstrap_media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_23__["MediaObjectsComponent"],
                _bootstrap_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__["PaginationComponent"],
                _bootstrap_progress_progress_component__WEBPACK_IMPORTED_MODULE_25__["ProgressBarsComponent"],
                _bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_26__["ModalsComponent"],
                _bootstrap_collapse_collapse_component__WEBPACK_IMPORTED_MODULE_27__["CollapseComponent"],
                _bootstrap_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_28__["AccordionComponent"],
                _bootstrap_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_29__["CarouselComponent"],
                _bootstrap_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_30__["DatepickerComponent"],
                _bootstrap_popover_popover_component__WEBPACK_IMPORTED_MODULE_31__["PopoverComponent"],
                _bootstrap_rating_rating_component__WEBPACK_IMPORTED_MODULE_32__["RatingComponent"],
                _bootstrap_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_33__["TabsComponent"],
                _bootstrap_timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_34__["TimepickerComponent"],
                _bootstrap_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_35__["TooltipComponent"],
                _bootstrap_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_36__["TypeaheadComponent"],
                _bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_26__["NgbdModalContent"],
                _bootstrap_ng_buttons_ng_buttons_component__WEBPACK_IMPORTED_MODULE_37__["NgButtonsComponent"],
                _extra_upload_upload_component__WEBPACK_IMPORTED_MODULE_38__["UploadComponent"],
                _extra_editor_editor_component__WEBPACK_IMPORTED_MODULE_39__["EditorComponent"],
                _extra_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_40__["DragDropComponent"],
                _extra_tour_tour_component__WEBPACK_IMPORTED_MODULE_41__["TourComponent"],
                _extra_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_42__["CropperComponent"],
                _extra_tags_input_tags_input_component__WEBPACK_IMPORTED_MODULE_43__["TagsInputComponent"],
                _extra_switch_switch_component__WEBPACK_IMPORTED_MODULE_44__["SwitchComponent"]
            ],
            entryComponents: [_bootstrap_modals_modals_component__WEBPACK_IMPORTED_MODULE_26__["NgbdModalContent"]]
        })
    ], UIComponentsModule);
    return UIComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/data/sweet-alerts.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/data/sweet-alerts.ts ***!
  \*********************************************/
/*! exports provided: basicAlert, withTitle, htmlAlert, typeQuestion, typeSuccess, typeInfo, typeWarning, typeError, customIcon, autoClose, outsideClick, ajaxRequest, customButton, promptFunction, confirmText, confirmCancelButton, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicAlert", function() { return basicAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTitle", function() { return withTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlAlert", function() { return htmlAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeQuestion", function() { return typeQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeSuccess", function() { return typeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeInfo", function() { return typeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeWarning", function() { return typeWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeError", function() { return typeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customIcon", function() { return customIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoClose", function() { return autoClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsideClick", function() { return outsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajaxRequest", function() { return ajaxRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customButton", function() { return customButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promptFunction", function() { return promptFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmText", function() { return confirmText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmCancelButton", function() { return confirmCancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

// Simple Alert
function basicAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Here's a message!");
}
// Alert with Title
function withTitle() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Here's a message!", "It's pretty, isn't it?");
}
//  HTML Alert
function htmlAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'HTML <small>Title</small>!',
        html: 'A custom <span style="color:#F6BB42">html<span> message.'
    });
}
// Question Type Alert
function typeQuestion() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Question", "Are You Sure?", "question");
}
// Success Type Alert
function typeSuccess() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Good job!", "You clicked the button!", "success");
}
// Info Type Alert
function typeInfo() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Info!", "You clicked the button!", "info");
}
// Warning Type Alert
function typeWarning() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Warning!", "You clicked the button!", "warning");
}
// Error Type Alert
function typeError() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()("Error!", "You clicked the button!", "error");
}
// Custom Icon 
function customIcon() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
}
// Auto close timer
function autoClose() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}
// Allow Outside Click
function outsideClick() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}
// Ajax Request
function ajaxRequest() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(function (email) {
        if (email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }
    });
}
// Button Options
function customButton() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Opps!'
    });
}
// Prompt Function
function promptFunction() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    });
    var steps = [
        {
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ];
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.queue(steps).then(function (result) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resetDefaults();
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result.value) +
                    '</pre>',
                confirmButtonText: 'Lovely!'
            });
        }
    });
}
// Confirm Button Action
function confirmText() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Text Changed',
        cancelButtonText: "No, cancel"
    }).then(function (isConfirm) {
        if (isConfirm) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Changed!', 'Confirm button text was changed!!', 'success');
        }
    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
}
// Confirm & Cancel Button
function confirmCancelButton() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Deleted!', 'Your imaginary file has been deleted.', 'success');
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
}
// Chaining modals / Steps
function steps() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        cancelButtonColor: '#FF586B',
        animation: false
    });
    var steps = [
        {
            title: 'Step 1',
            text: 'Chaining modals is easy with Step 1'
        },
        {
            title: 'Step 2',
            text: 'Chaining modals is easy with Step 2'
        },
        {
            title: 'Step 3',
            text: 'Chaining modals is easy with Step 3'
        },
    ];
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.queue(steps).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()({
            title: 'All done!',
            text: 'Great job :)',
            confirmButtonText: 'Lovely!',
            showCancelButton: false
        });
    }).then(function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.resetDefaults();
    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
}


/***/ })

}]);
//# sourceMappingURL=components-ui-components-module.js.map