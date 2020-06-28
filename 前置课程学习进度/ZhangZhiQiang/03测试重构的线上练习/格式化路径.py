import sys

for s in sys.stdin:
    s = s.strip()
    s = s.replace('\\', '/')
    items = []
    items += s.split('/')
    flag = False
    i = 0
    while i < len(items):
        if not items[i]:
            items.pop(i)
        elif items[i] == '.':
            items.pop(i)
        elif items[i] == '..':
            if i > 0:
                items.pop(i)
                items.pop(i - 1)
                i -= 1
            else:
                flag = True
                break
        else:
            i += 1
    if flag:
        print('Value Error')
    else:
        if s.startswith('/'):
            s = '/'+'/'.join(items)
        else:
            s = '/'.join(items)
        print(items, s)

