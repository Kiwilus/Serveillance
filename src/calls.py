import psutil
import platform


def cpu():
    return {
        "processor": platform.machine(),
        "usage": psutil.cpu_percent(interval=1),
        "cores": psutil.cpu_count(),
    }

def memory():
    memory = psutil.virtual_memory()
    return {
        "total": f"{memory.total / (1024**3):.2f}",
        "used" : f"{memory.used / (1024**3):.2f}",
        "available" : f"{memory.available / (1024**3):.2f}",
        "memory_usage_percent" : memory.percent
    }

def disks():
    partitions = psutil.disk_partitions()
    disks = []

    for partition in partitions:
        usage = psutil.disk_usage(partition.mountpoint)

        disks.append({
            "disk": partition.device,
            "mountpoint": partition.mountpoint,
            "filesystem": partition.fstype,
            "total_storage": round(usage.total / (1024**3), 2),
            "used_storage": round(usage.used / (1024**3), 2),
            "free_storage": round(usage.free / (1024**3), 2),
            "storage_usage_percent": usage.percent
        })

    return disks
