function calculation(userinput) {
    const currentDate = new Date();
    const inputDate = new Date(userinput);
    // console.log("Current date ::", +currentDate)
    const difference = Math.abs(currentDate - inputDate);
    // console.log("Difference;;;;;;; ", +difference);

    const day = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hour = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const mins = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(difference % (1000 * 60) / 1000);

    return {
        day: day,
        hour: hour,
        mins: mins,
        seconds: seconds
    }

}


const userinput = "2024-02-14T22:39:00"; // Input date string in ISO format
const timeDifference = calculation(userinput);

console.log(`time difference-> ${timeDifference.day}day ${timeDifference.hour}hour ${timeDifference.mins}mins ${timeDifference.seconds}seconds`);