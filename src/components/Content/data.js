const data = {
  darkTheme: {
    name: "Dark theme",
    isChecked: false,
    code: `Set-ItemProperty -Path HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize -Name AppsUseLightTheme -Value 0`,
    info:
      "Enable dark theme for Windows. Note that this setting might not work "
  },
  installChocolatey: {
    name: "Install chocolatey",
    isChecked: false,
    code: `if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs; exit }
  Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
  },
  uninstallBloatware: {
    name: "Uninstall bloatware",
    isChecked: false,
    code: `sampleCode2`,
    info: "testInfo"
  }
};

export default data;
