

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(status ?: 'onStartupFinished', arg ?: string) : void { }

export function about() : void {
	eda.sys_IFrame.openIFrame('/iframe/index.html', 500, 200);
}

export function debug(): void{
	eda.sys_IFrame.openIFrame('/iframe/debug/index.html', 500, 500);
}
