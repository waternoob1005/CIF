import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { CommandPermissionLevel } from "bdsx/bds/command";
import { serverProperties } from "bdsx/serverproperties";
import { CANCEL } from "bdsx/common";

function abstractFunction(): never {
    throw Error(`Failed to load "implements.ts"`);
};

if (serverProperties["server-authoritative-movement"] === "server-auth-with-rewind") {
	console.error(new Error("server-auth 또는 client-auth 를 사용해주세요"));
	exec("pause");
	throw "";
};

export namespace CIF {
    /**
     * Send messages to players
     * @param message 보낼 메세지
     * @param target Permission
     */
    export function announce(message: string, target: CommandPermissionLevel | "ALL" = CommandPermissionLevel.Operator): void {
        abstractFunction();
    };


    /**
    * 콘솔에 로그를 남깁니다
    * @param message 콘솔에 남길 문자
    */
    export function log(message: string): void {
        abstractFunction();
    };


    /**
     * 대충 밴 함수
     * @deprecated just define
     */
    export function ban(ni: NetworkIdentifier, reason: string): void {
        abstractFunction();
    };


    /**
     * 대충 핵 감지됐을 때 쓰는 함수
     * @description CIF.ban() 은 이 함수에서 호출 안 함
     */
    export function detect(ni: NetworkIdentifier, cheatName: string, cheatDescription: string): CANCEL {
        abstractFunction();
    };


    /**
     * CVE 감지 때 쓰는 함수
     * @description CIF.ban() 은 이 함수에서 호출 안 함
     */
    export function ipDetect(ni: NetworkIdentifier, cheatName: string, cheatDescription: string): void {
        abstractFunction();
    };


	export function suspect(ni: NetworkIdentifier, cheatName: string, cheatDescription: string): CANCEL {
		abstractFunction();
	};


    export function resetDetected(playerName: string): void {
        abstractFunction();
    };


    export const wasDetected: Record<string, boolean> = {};
};

import { exec } from "child_process";

if (serverProperties["server-authoritative-movement"] === "client-auth") {
	CIF.log("CIF는 server-auth 를 추천합니다");
};