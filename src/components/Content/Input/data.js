const data = {
  setting1: { name: "Dark theme", isChecked: "false", code: "sampleCode1" },
  setting2: { name: "name2", isChecked: "false", code: "sampleCode2" },
  setting3: {
    name: "Install chocolatey",
    isChecked: "false",
    code: `if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) { Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs; exit }
  Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
  }
};

export default data;
