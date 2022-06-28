const { exec } = require('child_process'); // native in nodeJs
const chokidar = require('chokidar');

chokidar
	.watch('.', {
		ignored: [
			'**/node_modules/**/*',
			'**/src/**/*',
			'**/scripts/**/*',
			'**/.git/**/*',
		],
		ignoreInitial: true,
		persistent: true,
	})
	.on('all', async (event, path) => {
		path = path.substring(9, path.length);
		console.log(
			'event ->',
			event,
			' ',
			'path',
			path,
		);
		const platform = process.platform;
		const script_to_use =
			platform === 'win32'
				? 'powershell ./scripts/copy-watcher.ps1'
				: `sh scripts/copy-watcher.sh ${path}`;
		if (event === 'change') {
			exec(
				script_to_use,
				(error, stdout, stderr) => {
					if (error) {
						console.log(`error: ${error.message}`);
						return;
					}
					if (stderr) {
						console.log(`stderr: ${stderr}`);
						return;
					}
					console.log(`stdout: ${stdout}`);
				},
			);
			console.log(
				'..............................................',
			);
		}
	});
