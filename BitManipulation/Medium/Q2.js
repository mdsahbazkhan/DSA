// Subsets

var subsets = function(nums) {
    let n= nums.length;
    let subset=1<<n;
    let ans=[];
    for(let i=0;i<subset;i++){
        let temp=[];
        for(let j=0;j<n;j++){
            if(i&(1<<j)){
                temp.push(nums[j])
            }
        }
        ans.push([...temp])
    }
    return ans
};