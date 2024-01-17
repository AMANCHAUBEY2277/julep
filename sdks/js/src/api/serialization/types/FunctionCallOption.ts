/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";

export const FunctionCallOption: core.serialization.ObjectSchema<
    serializers.FunctionCallOption.Raw,
    JulepApi.FunctionCallOption
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace FunctionCallOption {
    interface Raw {
        name: string;
    }
}