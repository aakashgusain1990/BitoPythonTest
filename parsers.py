

# Import module
import os
 
# Assign directory
directory = r"C:\Users\Lenovo\Downloads\gfg-test"
 
# Iterate over files in directory
for name in os.listdir(directory):
    # Open file
    with open(os.path.join(directory, name)) as f:
        print(f"Content of '{name}'")
        # Read content of file
        print(f.read())
 
    print()