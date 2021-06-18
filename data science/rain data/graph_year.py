
from datetime import datetime
import matplotlib.pyplot as plt


days = [i for i in range(1, 367)]
totals = [0 for i in range(1, 367)]
counts = [0 for i in range(1, 367)]
with open('rain_output.csv', 'r') as f:
    contents = f.read()
    lines = contents.split('\n')
    lines.pop(0) # remove header
    for line in lines:
        if line == '':
            continue
        line = line.split(',')
        day_of_year = datetime.strptime(line.pop(0), '%Y %m %d').timetuple().tm_yday
        line = [float(v) for v in line if v != '']
        totals[day_of_year-1] += sum(line) / len(line)
        counts[day_of_year-1] += 1


averages = [totals[i] / counts[i] for i in range(len(totals))]
plt.plot(days,averages)
plt.show()

        

