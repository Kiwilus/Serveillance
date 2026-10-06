import psutil
import platform


def cpu():
    return {
        "processor": platform.machine(),
        "usage": psutil.cpu_percent(interval=1),
        "cores": psutil.cpu_count(),
    }
