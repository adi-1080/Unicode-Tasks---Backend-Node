#include <bits/stdc++.h>
using namespace std;
int main()
{   string input = "hello world";
    string distinct_letters = "abcdefghijklmnopqrstuvwxyz";
    vector<int> count(26,0);
    string count2 = "00000000000000000000000000";
    // cout<<count[2];
    // char* ch = new char[input.length()];
    // int ch_length = input.length();
    // //creating a char array
    // for(int i=0; i<input.length(); i++){
    //     ch[i] = input[i];
    // }   
    //removing occurences
    // for(int i=0; i<ch_length; i++){
    //     count2[(char)ch[i]];
    // }  
    // for(int i=0; i<count2.length(); i++){
    //     cout<<count2[i]<<"";
    // }cout<<endl;
    for(int i=0; i<input.length(); i++){
        for(int j=0; j<distinct_letters.length(); j++){
            if(input[i] == distinct_letters[j]){
                count[j]++;
            }
        }
    }
    for(int i=0; i<count.size(); i++){
        cout<<count[i]<<" ";
    }cout<<endl;
    int n=0;
    for(int i=0; i<count.size(); i++){
        if(count[i] > 0){
            n++;
        }
    }
    char* ch = new char[n];
    cout<<n<<endl;
    int k=0;
    for (int i = 0; i < count.size(); i++)
    {
        if (count[i] > 0) {
            ch[k] = 'a' + i;
            k++;
        }
        
    }
    for (int i = 0; i < n; i++)
    {
        cout<<ch[i]<<" ";
    }
    return 0;
}