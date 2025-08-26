def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
        print(f"第{i+1}轮排序结果：", arr)          
    return arr

nums = [20, 40, 30, 10, 60, 50]
print("排序前：", nums)
print("排序后：", bubble_sort(nums))