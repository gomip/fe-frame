/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { View } from './view';

/**
 * 
 * @export
 * @interface ModelAndView
 */
export interface ModelAndView {
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    empty?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ModelAndView
     */
    model?: object;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ModelAndView
     */
    modelMap?: { [key: string]: object; };
    /**
     * 
     * @type {boolean}
     * @memberof ModelAndView
     */
    reference?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    status?: ModelAndViewStatusEnum;
    /**
     * 
     * @type {View}
     * @memberof ModelAndView
     */
    view?: View;
    /**
     * 
     * @type {string}
     * @memberof ModelAndView
     */
    viewName?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ModelAndViewStatusEnum {
    Accepted = 'ACCEPTED',
    AlreadyReported = 'ALREADY_REPORTED',
    BadGateway = 'BAD_GATEWAY',
    BadRequest = 'BAD_REQUEST',
    BandwidthLimitExceeded = 'BANDWIDTH_LIMIT_EXCEEDED',
    Checkpoint = 'CHECKPOINT',
    Conflict = 'CONFLICT',
    Continue = 'CONTINUE',
    Created = 'CREATED',
    DestinationLocked = 'DESTINATION_LOCKED',
    ExpectationFailed = 'EXPECTATION_FAILED',
    FailedDependency = 'FAILED_DEPENDENCY',
    Forbidden = 'FORBIDDEN',
    Found = 'FOUND',
    GatewayTimeout = 'GATEWAY_TIMEOUT',
    Gone = 'GONE',
    HttpVersionNotSupported = 'HTTP_VERSION_NOT_SUPPORTED',
    ImUsed = 'IM_USED',
    InsufficientSpaceOnResource = 'INSUFFICIENT_SPACE_ON_RESOURCE',
    InsufficientStorage = 'INSUFFICIENT_STORAGE',
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    IAmATeapot = 'I_AM_A_TEAPOT',
    LengthRequired = 'LENGTH_REQUIRED',
    Locked = 'LOCKED',
    LoopDetected = 'LOOP_DETECTED',
    MethodFailure = 'METHOD_FAILURE',
    MethodNotAllowed = 'METHOD_NOT_ALLOWED',
    MovedPermanently = 'MOVED_PERMANENTLY',
    MovedTemporarily = 'MOVED_TEMPORARILY',
    MultipleChoices = 'MULTIPLE_CHOICES',
    MultiStatus = 'MULTI_STATUS',
    NetworkAuthenticationRequired = 'NETWORK_AUTHENTICATION_REQUIRED',
    NonAuthoritativeInformation = 'NON_AUTHORITATIVE_INFORMATION',
    NotAcceptable = 'NOT_ACCEPTABLE',
    NotExtended = 'NOT_EXTENDED',
    NotFound = 'NOT_FOUND',
    NotImplemented = 'NOT_IMPLEMENTED',
    NotModified = 'NOT_MODIFIED',
    NoContent = 'NO_CONTENT',
    Ok = 'OK',
    PartialContent = 'PARTIAL_CONTENT',
    PayloadTooLarge = 'PAYLOAD_TOO_LARGE',
    PaymentRequired = 'PAYMENT_REQUIRED',
    PermanentRedirect = 'PERMANENT_REDIRECT',
    PreconditionFailed = 'PRECONDITION_FAILED',
    PreconditionRequired = 'PRECONDITION_REQUIRED',
    Processing = 'PROCESSING',
    ProxyAuthenticationRequired = 'PROXY_AUTHENTICATION_REQUIRED',
    RequestedRangeNotSatisfiable = 'REQUESTED_RANGE_NOT_SATISFIABLE',
    RequestEntityTooLarge = 'REQUEST_ENTITY_TOO_LARGE',
    RequestHeaderFieldsTooLarge = 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    RequestTimeout = 'REQUEST_TIMEOUT',
    RequestUriTooLong = 'REQUEST_URI_TOO_LONG',
    ResetContent = 'RESET_CONTENT',
    SeeOther = 'SEE_OTHER',
    ServiceUnavailable = 'SERVICE_UNAVAILABLE',
    SwitchingProtocols = 'SWITCHING_PROTOCOLS',
    TemporaryRedirect = 'TEMPORARY_REDIRECT',
    TooEarly = 'TOO_EARLY',
    TooManyRequests = 'TOO_MANY_REQUESTS',
    Unauthorized = 'UNAUTHORIZED',
    UnavailableForLegalReasons = 'UNAVAILABLE_FOR_LEGAL_REASONS',
    UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
    UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
    UpgradeRequired = 'UPGRADE_REQUIRED',
    UriTooLong = 'URI_TOO_LONG',
    UseProxy = 'USE_PROXY',
    VariantAlsoNegotiates = 'VARIANT_ALSO_NEGOTIATES'
}



