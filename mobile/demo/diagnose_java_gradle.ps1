# Diagnostic script to check Java and Gradle versions
$logPath = "d:\MultiverseAI\mobile\.cursor\debug.log"

function Write-DebugLog {
    param($location, $message, $data, $hypothesisId)
    $logEntry = @{
        id = "log_$(Get-Date -Format 'yyyyMMddHHmmss')_$([guid]::NewGuid().ToString().Substring(0,8))"
        timestamp = [DateTimeOffset]::Now.ToUnixTimeMilliseconds()
        location = $location
        message = $message
        data = $data
        sessionId = "debug-session"
        runId = "run1"
        hypothesisId = $hypothesisId
    } | ConvertTo-Json -Compress
    Add-Content -Path $logPath -Value $logEntry
}

# #region agent log
Write-DebugLog -location "diagnose_java_gradle.ps1:15" -message "Starting Java/Gradle diagnostics" -data @{step="init"} -hypothesisId "ALL"
# #endregion

# Hypothesis A: Check JAVA_HOME environment variable
# #region agent log
$javaHome = $env:JAVA_HOME
Write-DebugLog -location "diagnose_java_gradle.ps1:19" -message "JAVA_HOME environment variable" -data @{javaHome=$javaHome; exists=($null -ne $javaHome)} -hypothesisId "A"
# #endregion

# Hypothesis B: Check Flutter's Java version
# #region agent log
try {
    $flutterJava = flutter doctor -v 2>&1 | Select-String -Pattern "Java" | Out-String
    Write-DebugLog -location "diagnose_java_gradle.ps1:25" -message "Flutter Java version from doctor" -data @{flutterJavaOutput=$flutterJava} -hypothesisId "B"
} catch {
    Write-DebugLog -location "diagnose_java_gradle.ps1:27" -message "Failed to get Flutter Java info" -data @{error=$_.Exception.Message} -hypothesisId "B"
}
# #endregion

# Hypothesis C: Check system Java versions
# #region agent log
try {
    $javaVersion = java -version 2>&1 | Out-String
    Write-DebugLog -location "diagnose_java_gradle.ps1:34" -message "System Java version" -data @{javaVersionOutput=$javaVersion} -hypothesisId "C"
} catch {
    Write-DebugLog -location "diagnose_java_gradle.ps1:36" -message "Java command not found in PATH" -data @{error=$_.Exception.Message} -hypothesisId "C"
}
# #endregion

# Hypothesis D: Check Gradle wrapper version
# #region agent log
try {
    $gradleWrapperProps = Get-Content "android\gradle\wrapper\gradle-wrapper.properties" -Raw
    $gradleVersion = [regex]::Match($gradleWrapperProps, "gradle-(\d+\.\d+\.\d+)").Groups[1].Value
    Write-DebugLog -location "diagnose_java_gradle.ps1:43" -message "Gradle wrapper version" -data @{gradleVersion=$gradleVersion; fullContent=$gradleWrapperProps} -hypothesisId "D"
} catch {
    Write-DebugLog -location "diagnose_java_gradle.ps1:45" -message "Failed to read Gradle wrapper" -data @{error=$_.Exception.Message} -hypothesisId "D"
}
# #endregion

# Hypothesis E: Check if Java 21 is being used (class file version 65)
# #region agent log
try {
    if ($javaHome) {
        $javaExe = Join-Path $javaHome "bin\java.exe"
        if (Test-Path $javaExe) {
            $javaVersionOutput = & $javaExe -version 2>&1 | Out-String
            $isJava21 = $javaVersionOutput -match "21\."
            Write-DebugLog -location "diagnose_java_gradle.ps1:54" -message "Java version from JAVA_HOME" -data @{javaExe=$javaExe; versionOutput=$javaVersionOutput; isJava21=$isJava21} -hypothesisId "E"
        }
    }
} catch {
    Write-DebugLog -location "diagnose_java_gradle.ps1:58" -message "Failed to check Java from JAVA_HOME" -data @{error=$_.Exception.Message} -hypothesisId "E"
}
# #endregion

# #region agent log
Write-DebugLog -location "diagnose_java_gradle.ps1:62" -message "Diagnostics complete" -data @{step="complete"} -hypothesisId "ALL"
# #endregion

Write-Host "Diagnostics complete. Check debug.log for details."






