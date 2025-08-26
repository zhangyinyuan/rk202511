def select_sort(nums): 
    n = len(nums)
    # range 函数的意思：生成一个从 0 到 n-1 的整数序列, 不包括n，右边开区间
    for i in range(n):
        min_index = i
        tmp = nums[i]
        for j in range(i + 1, n):
            if(nums[i] <= nums[j]):
                continue;
            else:
                min_index = j;
        nums[i] = nums[min_index];
        nums[min_index] = tmp;
        print(f"第{i+1}轮排序结果：", nums)
    return nums;

nums = [20, 40, 30, 10, 60, 50]
print("排序前：", nums)
print("排序后：", select_sort(nums))