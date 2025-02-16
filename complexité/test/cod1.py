# Exemple de recherche linéaire
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
# Complexité en temps : O(n)



