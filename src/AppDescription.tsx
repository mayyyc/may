import React from "react";

export const AppDescription = () => {
  return (
    <div>
      <h3>
        Wilder -{" "}
        <a href="http://wilder.junwenchen.com/" target="__blank">
          wilder.junwenchen.com
        </a>
      </h3>
      <h4>The Story</h4>
      <p>
        Wilder is a dating app you can meet the kangaroos around you. I built
        this app as a joke for a friend. She was travelling in central Australia
        at that time and complaint to me that there's only one person around her
        on dating app. I made Wilder for her so she could meet some kangaroos
        instead.
      </p>
      <h4>How It Works</h4>
      <p>
        Based on user's real-time location, Wilder requests kangaroo occurance
        from a wildlife database(
        <a
          href="https://biocache.ala.org.au/occurrences/search#tab_recordImages"
          target="__blank"
        >
          Atlas of Living Australia
        </a>
        ) and show them as dating profiles to the user.
      </p>
      <h4>Tech Stack</h4>
      <p>React / RESTful API</p>
    </div>
  );
};
