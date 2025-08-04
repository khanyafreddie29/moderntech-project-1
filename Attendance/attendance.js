const employeeAttendance = {
  "employeeInformation": [
    {
      employeeId: 1,
      name: "Sibongile Nkosi",
      position: "Software Engineer",
      department: "Development",
      salary: 70000,
      employmentHistory: "Joined in 2015, promoted to Senior in 2018",
      contact: "sibongile.nkosi@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVz13n5__CJit9WIsOztZ4fdZdZmrV_RRHwg&s",
    },
    {
      employeeId: 2,
      name: "Lungile Moyo",
      position: "HR Manager",
      department: "HR",
      salary: 80000,
      employmentHistory: "Joined in 2013, promoted to Manager in 2017",
      contact: "lungile.moyo@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s",
    },
    {
      employeeId: 3,
      name: "Thabo Molefe",
      position: "Quality Analyst",
      department: "QA",
      salary: 55000,
      employmentHistory: "Joined in 2018",
      contact: "thabo.molefe@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTYDFHOsEqWaxITzH0YETeYXQw6fvastO8Q&s",
    },
    {
      employeeId: 4,
      name: "Keshav Naidoo",
      position: "Sales Representative",
      department: "Sales",
      salary: 60000,
      employmentHistory: "Joined in 2020",
      contact: "keshav.naidoo@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAkWcI0LFLuWTfiyCMiwl8TvYT_FsflDV1g&s",
    },
    {
      employeeId: 5,
      name: "Zanele Khumalo",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 58000,
      employmentHistory: "Joined in 2019",
      contact: "zanele.khumalo@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxarmEAWMbWnfZHQ8QVE6fZgR0fBe-63RSQ&s",
    },
    {
      employeeId: 6,
      name: "Sipho Zulu",
      position: "UI/UX Designer",
      department: "Design",
      salary: 65000,
      employmentHistory: "Joined in 2016",
      contact: "sipho.zulu@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94d9Pn8Pjsqw4yz2zRDTzZeyeXWwT26Lxqw&s",
    },
    {
      employeeId: 7,
      name: "Naledi Moeketsi",
      position: "DevOps Engineer",
      department: "IT",
      salary: 72000,
      employmentHistory: "Joined in 2017",
      contact: "naledi.moeketsi@moderntech.com",
      img: "data:image/jpeg;base64,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",
    },
    {
      employeeId: 8,
      name: "Heather Johnson",
      position: "Content Strategist",
      department: "Marketing",
      salary: 56000,
      employmentHistory: "Joined in 2021",
      contact: "heather.johnson@moderntech.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitWKXOGriZKh7u3b1VtWjNj8Ib7ld9rj_oA&s",
    },
    {
      employeeId: 9,
      name: "Chad Thompson",
      position: "Accountant",
      department: "Finance",
      salary: 62000,
      employmentHistory: "Joined in 2018",
      contact: "chad.thompson@moderntech.com",
      img: "data:image/jpeg;base64,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",
    },
    {
      employeeId: 10,
      name: "Madison Clark",
      position: "Customer Support Lead",
      department: "Support",
      salary: 58000,
      employmentHistory: "Joined in 2016",
      contact: "madison.clark@moderntech.com",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhIVFRAWFRcVFRYQDxAVEBUPFRIWFhYVFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tKy0rLS0tKy0tLS0tLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYHAAj/xABEEAACAQIDBQUFBAcHAwUAAAABAgADEQQFIRIxQVFxBhMiYYEjMpGhsRRCwfAkUmJyg7LRBxUWNHOS4WPS8TM1U4LC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAgICAgIDAQEAAAAAAAAAAAECEQMhEjETQQQyUSJC/9oADAMBAAIRAxEAPwDtIZFHAfCRtjRwBPQR1HAooAtf943lhVA3C3SYxTNSqdy6ee+XFiz0xj09PT0xhJ6LPTGEiWizxmMQMsaVkpiETGMnnq+09IKdIdztfGekEVBHiY5Dng/T/LvF/mn0Dgqi7C9BPnztV/m6hG+4+N50LA5niBRQ6+7ytGYh0fvREarac0yrtrWq4gYZaJ29SzFvAqDex48vUiF87zqsinYB6hLseg3D5yc5qPZSEHLo1329Y4YtTxnG/wDGWJLbJYgX1JUBhpxtvlyjnmJXxJU2/J1Yj4G3yieVD+F/p1gveMZfOZDs92np1mWnV9lUOgO17Jm5XPunr8ZtFwp5ykZKXRKUHF0ysaUY1DyhDu4hWNYtAt8GDvEq1slptvUfCGyJG01hozVbs/TG7SRf3YV3GaDFLcWi0MAxGpH1msxnGd14XgzGYh7+7N2MqXiSflAGcUVVrCaL2ZooZeSV3fAS6uAqtuQ+ot9YUy7MKa0wAuvIKItXOj91fiYrb/AoHJkNU79kdTf6R/8Ahxv1x/tMWtm1U8QOg/rK/wDeNX9c/KDY2jok9PT0AD09PT15jHosbtRQZjHp6eMaZjCkzxkcfMYjMbeOMaTAYz2b++YLqiE81PjMG1Y8TM5NmyA5gA3umql+m0J3ijg6ZRRYWtynBc3/AM//ABF/mE7biMWKdANf7vwAGphk6VixVujN9ocbRwjt9noh8TUIQKo1Yg8TwUXlGrkdesA1WqVY70WxTpqIV7MZcXvi6o8bjwA/cpHUacCdLw5WpiccrltnfBRhowtLsmqklmvfyH1lHH5PWp+KjWf92odpD5WM3tRBB2JQRHZZU/RhadqwIZRTrjePusN1xzE2PZTtRUKGjVualMDW9yafA34259IDzjAX8S6OuoPnyPlIeydcPjKV9CQ6OL81Y/zAfkzYpNSRPPBOLOiJn6cdOsnTNaZ+8PjKVfLUMH1soHD6z0DzbND9rU8Y01RzmVqYGqu5j8ZA2IrrxvAY1VapEGLa2+ZJ86qD3gYTwWO21vMEJVaxO8n4mBcxqy41eA80Y3jRAwngWusmaUsmJ2NZeKmBhRE0jlg0WPCM+zNygGOg/bFIuNY04k8BKmHTwjpLCiIYf3hMeoMaI8NAEdsRwEQGLMYWJPTxhARuY++kawjuEBiFmjNuSMJGVmCZ3M28Zg+qZbzM+0aUKjSkRGcozc/px/1F+s7HjlD4ceQF7cja84vnIvjGA3lwPnOx4Oi3cgMd6EfEWvBkVpoON1KwnhXUUVbcuyD6WgR+1OG7wUyXDE28VN1W/UiWDhaxwiJTZVqBbA1BcBgSAdN8w79lsSK201UvcXJNiduwvYFbhb34zl20d0UrN7VxCAEk6a/KZRu0gditOi5F7bTMqJ84UzTCsuFRSbuOPO5sLzN43sy1ZF9o4sb+EsLrbQWDC3Hnvirb2U6VrZfxFbavoQeRtu8iNDM3lTkY6mFIDiquhNrqD4vlDeW5KaC+J2Y6222vYX0HnKuCywNiyR77Ouz0DITJrUiklcTob4iQPXMlXAVOUrV8HVAJ5chPTo8W0eZiZEyjjaZvFdqVRzTa4YG02WXYEOgY8dZkrC9Aith0aLSo7IsAfhNIuXqOEkGEXlDxByMw4blAGc4kidCrYNSN0BZnkQeUjFCSmyHsim2us04wi8oIyPCGlpDu1Iy0ysXaI/s45RvcDlJu8id5AEv0qegkqrK1GtcCSh5MYmAEWRB47amMSAx0i2p7bmMSxNqRlowzGJS0fKvGWNsQmGNGGOYxpgMZTNj7VvSD6hl3Nz7VvSDqrS0UTkzlWPb9O/ir/MJ3Sivsl6Tg+La+P/ir/MJ3uiPZL0mkaLEwTgoBcaXuL6g34/WV8VVCG/yErUTss68TZ9OQ8P8AzK9N7OzOGKru2VLcN9hrOKTV6PRxx1bG9osfSFMlqijZ0JuNkNxBPqJXyzFrs2PDS+9T0lPNs4w3/wAbHW4HdgeLnaD6Gbd6dmnRYKN5cgKOgGpPlFf6dKxtR6L+bVhCPZHK9rEd6ykBVurG1mJFgo46Xv8ADlA1WjxJuQN/7R/oJpuw+YpURgPfps1PedwPLdvuL+QmxJOeyXyZuOPRrtgStiALGSmsJVr4gWM9BHkM5jnuWI2JYka7Q/CdKyumBTUeUwua2NZjwuJr8BmtMUx4hu5iLF7Y0lpBbYiGnBVXtFRF/GunnA+J7d4dTbbufIRrFo1ZpyOogmRq9riRdF08zMd2i7cYoHZSw9CTCmmBxaOn1qoV9JL9qmQ7HYypXpB6hu3S00LUzEe2OlovfaBGd+JQIMZcwDBbB32F6CWbnnKuC9xeglmTHJFYx4qGRCPEWw0TLVju9kIM8TNZqJjVjTWMiJioLwgoeLk75ZWjKw0Il7hGARGNMVjGkzGMfnDe1aDKzS7nDe2f88IPqt9J0wWkQkzlVY3x/wDFX+YT6Ewg8C9J883vmH8Zf5hPoF6uzRv+z+ElmdJsfErdGYzzMGpVA6anaNwfvDds/CGsDUDotRQQrqGF7XsReYLNsW9bELRpAu7XA2ddWawPkAN5m9yjCmnhsPTYgslJASL2uFF7X4TzMVu2etkpJL2DszyYOSxNr8idfnB/2dKYsOAhrNqTgDZ1v6WgCvSc6HTpv+MpIaMm1tgjtHj2p0HZDYiwv+0zAX+fylL+zzNTTZlv56n1P1+Uu9qctaph2pU/fbZ2bm12DrYX6zHZJUenXVailXB2WVhYg/m0RWlaFnTdM6Nnv9oAosaew235A2gKv2yrNTLKGuYax2WJWCuRdhpu4SNspQIbLw5T1cUFOKbZ42WfCbSRzzE59infZ+8fOXKWXY5x7xAPWKFVcTs7OoPGdIwViFAHKUWKK2TlmldIzWB7KYkUjeobmBP8IPteJiSDzM7MqWp68pl6reI9YVGL6QrnJds9lWRAIoPLjJ2yrDq122b+kLYdroJns7W7RMa2UyO4mjy9EHuWt5S8wgPsytlh1hJS7Kw6IGWQbMstIYBi3hG8C9JYvKOE91ektbUmOSqY/akAeNapFoYtq0QmVlqx3ezUAlJjHrbMYasE5tjLaCHoy2F8Pi9pwIavpMRk7k1114TacIwtDGMaTGssYyzGMTnD+2fr+EoVW+kK4zKar1SfCA5Ntom9gBrYCSjs8PvVCRxCrb53P0nUpJI52mzilP8A9wH+sv1E+gTh9umEva6jhu9IIwWVYag47miiux8dQKDVI3m7nX5w9h+JPGSnUikLiUckyihhqipSHiYku7G9R7KSATwA5DSQ0cTsvVoN71NrD/TI2k+RA9JfwJviV8kc/EqPxMdnuRCqwrUyErgWub7LqPuvb5GRnj/lKJfFlXJ832VMQwNoOZFBZzwE8wrCotJkO2d1tQRzDbrQ3h8rAANSzHfs/dv585BQcmdMskYK7BOV5ZcitUXQa01I1v8ArkfT48plu0nZfv2SvTISsvMeF12iQCeBFzY+c6Ji9xJNv6ndA1deE6vFFQ4nH5pOfID4DEd0uzUHi0vxF7QjhayVFJAiqp7xF53v0Fjf885dqIt7W1lI1GNEpXKXI5JnhAxxAHKb7IjqPSUcx7HUalfve8qB+XgKfy3+cN5Vl4VrK17eVpVTXCvZGUHzv0HsSfB6TE4weI9Zt8VTOxaZHF5fUJOnGHG9CZFsLYD3BAmcDxQ7gqDBBpAmb0H2vdMXH9mUyfVBTs97ohtoDyEEAXFobJkZ/ZlofVEbyCTtIYByTC+4vSTEyHD+6vSTGIMNYxpitFi2Ghl54tPExt4THmaAs7Y3ENs8CZu9yLQMKLfZ+/ei/KbbhMTkBPei/KbU7o9E7tkZjKj2EdeVcU3X0hQGVMQfGh87a+YI0PW0aag2tk8b/IGMrPcWv0Yc+RlLH1DfbG8rZR+0w19ANr5RxSDBMWdj90aA8yTr9PnDDPZfSUcnwuygubsSWJ67vS1pPmL7KE+UxifKtDt/m1/+IUxeKVBc6ngBvJlHCU9lQOVh8BYyV1BcXG8WjUKepFvfJtfU79FAOi8t418o7vAVDHQW3HePI+cfjSBTY+RHx0lemt9kHjqZgDLberC1tVHLkT52+F4Hre9D53MfMD5iAXHjPWZhRNhU9qvPYb+ZZWo1/FWY7kfY6tpu+Ms4Y+3Uf9M/Nh/SVkpjvGXh3rVDrpoi7/Vr+kAwjCw5sd9uHleRYasabq2gAOttSV469JcrG+qjw820W3kOPXSDcUbcR6AQMKNhWUESsaK8p7A1C1Gkf2R8hb8I8x49EZLY+nSFpBXwinhLVIaRj74F2F9AitSCnSOFQiPxPvCQYyrbdJz7Kw6JO/kfeyi7nfIftBi2OG6HujpJDI6R8I6TxMnY9DzEMURt4LCJaRPLFpEyw2YgaCscPEIWqG0C49yWAmsARyZx3w52mxJ0mGyEfpAv+rNwRpKsmRbUqYgyYjWQYg+UMRWCMY5U3Gvlx9OfSSYZRUpow1uDa27UkX+AkGPBINtR8/hL2Tj9Go+aDfv5mOKT01+Wkp5gu09JObhj+4njPx2besJIukr4altPUfl4B8rzIzLdMaDrHAXKnkT9I5p6hx6wijMaNoBebD4DxH6RtE32m+Edid46H4nT8TFCWFpjDKmidWH1gVvehrE+6P3r/AQKomCj2CP6RU8qSfN3/oJSR9rFtT4BQ5HO5sPTw39BJsI/ta7fur62v/8AqR5JhC2IxNck2ulJRbTwLtMb8dXI/wDrAEJ4lRAmNaGsVuJ4QJjEO/T1B/CB9DR7NZlaexpD9gfMX/GWNmC/7xFOkh3+Ffd3bhulI5+f1TFc0uzcG+jRSB98o4TNg/kfOVMzzynS95gPWPDfROarsnxXvCUMW2sr0M4Wt4kNxzkr1byU3stBaQg1Ep3lxaolXbEVMYK0KnhHSSlzFoJoOklKSdj0Rq5ntsydUjtiCw0VS5kbVDLpSQOsZMVoo1ma0A49ahcWE09RYNrHxQ3s1HuziN3wvym3O6ZjKV9qOk07i4lWSRSFYEmx3b7SKql9Qf6RuDy9aTVGBJZzxJOgvu5b4+ogO7Q/KMgMEZhhgdWFjzBlvIktQRb32WZb33jaNvkZXzByUKnfwkfZWsNisP1apv1ZVb8Y3oUPRuAW1MeZJ9SSYga8dhD4B5aTIDFcx9Dd6yCsZNQPhEYUSp7354f+RHkSK/ibqB8ryTa+sASHFnwt0P0gRPw/CEsxq2Rj5TO18aEVmPATBSs8cQEtzqVTu3kKp/7ZayvEmmiqUALbTVCODNdvXWwlLD4dqSKzeKsRc7RsFvqQDbQfWOrAOPE1xbcoIQnkANW+khLI/R24/jr/AEFcPi1rA7I0Ulb3BUkbzfjyg/HIb6mXMJhe7QMVIcqLqLBV/ZCjQShi2ueukpvjs53XP+eh+OUKqU191Rx3/m8qinLOM1c23SI8hOWXZePQtI215TnPbTHs1UgnQcJ0ZwQPSck7X1fbN1lsOrJZV0brsOb0FmoImU7A/wCXWa8LF7YWQMNLwf36c5D2nzHu0KrvnP8A+8an6xlFAHI7th6QAEc6SKo5FoyqxnLyorVlkCLaD1qtPPWMHMPEukSBpTeu1oPqYp774PIjcGFqwgqoPGI/C1yb3lHEOQ8dSvYOJpsvw9nB8odO6ZrK6xLjXhNGx0nRZCiFpTqtbf8AWTYrEKoFzYncBcsegGpg7FVdlS7DZQb2qEAfDU+lpRCMpZliEALbWgFzrpI+ymDXue8uxase9a+gG0oAUDyUAQT2kDPh6uxTNmQ22gVud9gGA5boZyTHq1NOHhGlrW05b4mRvotigmmwrUo2Fh9Zju15zHbpU6G3QwzMA9cMu0SSBYC9wNfXoNdfVzGlRVqlU2VRc6Emw1Og3wVn/a7CVqRo0Koqs5XVAxRFDBiSxFr6bt94sW4/0M1yaiWKTuqhdstoBd7FjbiTzky5hUXgp9D/AFkNCupUSS6xOUv0fhH8JMJjWL2Ki5N7jnb+kvLy84OWwIIl5W4y2NtrZz5YpPSIMQgOjC633Gepqq+6qjooklcyrt8vWUJC5iqmxsCGBRgRpuLDT0t6xaaIRoALaKQBcEjeIyt7p5fjZpFhKnhgoNsgxeJK3DkABbsb+7befMcYLqNd/wA2tLebHaB8xY9DKgSxHkoH9PlaLk6Hx9koaWsIBe5lMGPpPwnMi7JcwcG9uU4z2sPt26zr2I49DOPdqGvXfrKY3tiTWkdA7AH9HSbEuAJi+w3+WWHMdXIRjfhF5UxuNma7R4kOz2O6ZS4jGx5Z31vcmR3M6VNNEuDTPoHEcJ4qx4GWFQFheXMR4RoJxxhZVyoECieUhr0m5Qh3pPCMeoeULxm5g1lNt0oVaR5H4Q/hkLNqNJdqUVtuieKxvJRmMFSNzBuY3DGawILnSCcfTUndD46RvJsdkDXqDoJqqrgKSdwF5mMlUCrpyE09ZbqQd0tEiwRk6sVarU992J/dpg+BRyFvnFxVPvKgvqq7hw2ucvacN0GZhVKUmI99rIv7zGwPpe/pLoiz2HIcl+FyF/dU2uOVzc/CT1VW2qjyuLmR4VQiADcAAOgi94CekZoCdFDG5btgkF1J5NoB0N5jB2Lq4UtVpVlK6syPT0J5KwOh9J0I17/njBOdY9Rs077xtEeV7D5g/wC2JKoxeiuNylNKzO4DP7WFWi9M9NpfiPxtD+EzGi9rMD0MopUVjovyjK2XK2vdgNzFwfiJypv2ei4oO7CHc3zl2k+im9+HqNJnMvwmw16rM1PkrWYf90J5rmWHpIndtZTfQk32tN9/SXxLZx/I6ou4qpb88DKne2PkfrxECYjOwyFrjrpbeDIRm4I38b8J0cTkNDia1qb6a6AeVwQflf4yLDNoBA6ZsrK9ybLbXhtX0XrrKbZ3bXdyA1Y/0moIVzGtaQUjpc7zqZSw7NVs7Gw/VH4mXTOXLK3R0440iQGOWQgyWmZFMoxtc6HpOP8AaHWs/WdjqroZyHtJT2a1TrK4/ZOfo3XYr/LrLHavHClRbmRYSr2Ib9HWBv7RMVqqCJWyi6M5libW0xk+1K+VtYGLtToglRGctn0QlTxCXa7aQZQ1cQyFE54dDz7KndxlSkYRCiIUEehCnhlsLx9R9JJWFhKb1dIAlfa1ME4xvFCNSrBGIr+O1pqNZbyM+2PQTU1N0z2TKO8PQTRVN0aqAUKtSwmfzvFgLQN9BV8X+xgPmRD2OtsNMwcrNamzbdkOpUgnxDiDfSWg1Wycouy62PFgLx4rgJvGpt8P+ZTyrJkahSqM7lmBPvAAC+gtaCcTmDYarZlFRNokeIgi514czK2iXFmmxFZaVJqjGyqLktoJk6OZU3d6tr7R0LbwgFhpw0HzMm7ZZh9ow9JV2lR2uwuATsWst9dLkH0lPs/kKVAxYmwNgATYAEjrwk5wctF8WSOPb7CC5wg8/ICJ/e1Rv/TpEj4w9guz1FbeEeuvLnDD4RVU2AGh3dIqwpDv5P4jDFcXV4bI+Hl1ir2XZtXa56X+Zm4p0QL6RWFrep+AlFCK9EZZpv2c0zfsmBtEElVTasSdm6ltbbr6CC8Jkam06dmFIFKg/wCnb4qT+MzWT0hsj0ma2BSdbBAyxgAu02yNwubX6SangLC00zYYSlXQAwMMWVqS2XpJFMj42j6q7Npy5F7OmDPEx6NK+3KeKzIJfQyJQvvjhcr5TlPaqp7Z+s2AzYkk25zAdoKxaoxPEy2J9ksuqOjdhGH2dSeECZ7Up1K7EndpI8lzfusJYA3I3zN1apLE33mGDpvQZLQWxFSmqkLvgzvYtHCXG0TG9zOk5btn/9k=",
    },
  ]
};

const FALLBACK_IMAGE = 'https://via.placeholder.com/40?text=User';

let staffMembers = employeeAttendance.employeeInformation.map(emp => {
  const hour = Math.floor(Math.random() * 4) + 8; // Hours between 08 and 11
  const minute = Math.floor(Math.random() * 60);
  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = minute.toString().padStart(2, '0');

  return {
    id: emp.employeeId,
    fullName: emp.name,
    dept: emp.position,
    role: emp.department,
    attendance: ['present', 'late', 'absent'][Math.floor(Math.random() * 3)],
    clockIn: emp.employeeId === 4 ? 'N/A' : `${formattedHour}:${formattedMinute} AM`,
    image: emp.img || FALLBACK_IMAGE
  };
});

function loadAttendanceFromStorage() {
  const savedData = localStorage.getItem('staffAttendance');
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      if (!Array.isArray(parsed) || parsed.length !== employeeAttendance.employeeInformation.length) {
        throw new Error("Invalid or outdated localStorage data");
      }
      staffMembers = parsed.map(member => ({
        ...member,
        image: employeeAttendance.employeeInformation.find(emp => emp.employeeId === member.id)?.img || FALLBACK_IMAGE
      }));
    } catch (e) {
      console.warn('Failed to load saved data. Resetting to default.', e);
    }
  }
}

function saveAttendanceToStorage() {
  localStorage.setItem('staffAttendance', JSON.stringify(staffMembers));
}

function renderAttendanceIcon(attendance) {
  switch (attendance) {
    case 'present':
      return '<i class="fas fa-check-circle status-icon present text-success"></i>';
    case 'late':
      return '<i class="fas fa-exclamation-circle status-icon late text-warning"></i>';
    case 'absent':
      return '<i class="fas fa-times-circle status-icon absent text-danger"></i>';
    default:
      return '<i class="fas fa-clock status-icon"></i>';
  }
}

function refreshMetrics() {
  const totalStaff = staffMembers.length;
  const onTimeCount = staffMembers.filter(m => m.attendance === 'present').length;
  const delayedCount = staffMembers.filter(m => m.attendance === 'late').length;
  const missingCount = staffMembers.filter(m => m.attendance === 'absent').length;

  document.getElementById('total-count').textContent = totalStaff;
  document.getElementById('present-count').textContent = onTimeCount;
  document.getElementById('late-count').textContent = delayedCount;
  document.getElementById('absent-count').textContent = missingCount;

  document.getElementById('present-percentage').textContent = Math.round(onTimeCount / totalStaff * 100) + '%';
  document.getElementById('late-percentage').textContent = Math.round(delayedCount / totalStaff * 100) + '%';
  document.getElementById('absent-percentage').textContent = Math.round(missingCount / totalStaff * 100) + '%';
}

function modifyAttendanceStatus(id, newAttendance) {
  staffMembers = staffMembers.map(member =>
    member.id === id ? { ...member, attendance: newAttendance } : member
  );
  saveAttendanceToStorage();
  populateStaffTable(currentFilter);
  refreshMetrics();
}

let currentFilter = 'all';

function filterStaff(status) {
  currentFilter = status;
  populateStaffTable(status);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === status);
  });
}

function populateStaffTable(filter = 'all') {
  const tbody = document.getElementById('employee-table');
  tbody.innerHTML = '';

  const filtered = filter === 'all'
    ? staffMembers
    : staffMembers.filter(m => m.attendance === filter);

  filtered.forEach(member => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${member.id}</td>
      <td>
        <div class="employee-cell d-flex align-items-center">
          <img src="${member.image}" alt="${member.fullName}"
               class="rounded-circle me-2 employee-img"
               style="width:40px; height:40px; object-fit: cover;">
          <div>${member.fullName}</div>
        </div>
      </td>
      <td>${member.dept}</td>
      <td>${member.role}</td>
      <td>${member.clockIn}</td>
      <td>
        <div class="status-cell d-flex align-items-center gap-2">
          ${renderAttendanceIcon(member.attendance)}
          <select class="form-select form-select-sm status-select" style="width:auto;"
            onchange="modifyAttendanceStatus(${member.id}, this.value)">
            <option value="present" ${member.attendance === 'present' ? 'selected' : ''}>Present</option>
            <option value="late" ${member.attendance === 'late' ? 'selected' : ''}>Late</option>
            <option value="absent" ${member.attendance === 'absent' ? 'selected' : ''}>Absent</option>
          </select>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function displayCurrentDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = 'Today: ' + today.toLocaleDateString('en-US', options);
}

function initializeApp() {
  loadAttendanceFromStorage();
  displayCurrentDate();
  filterStaff('all'); // This handles both table rendering and filter button states
  refreshMetrics();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterStaff(btn.dataset.filter));
  });
}

document.addEventListener('DOMContentLoaded', initializeApp);
