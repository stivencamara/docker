se der erro de memória (Bootstrap Check Failure of Max Virtual Memory Areas vm.max_map_count is Too Low) fazer o seguinte:

For Windows:
If you're using the Windows system just follow the steps below,

Open a PowerShell command prompt and execute the command,
	wsl -d docker-desktop
After that,
	sysctl -w vm.max_map_count=262144