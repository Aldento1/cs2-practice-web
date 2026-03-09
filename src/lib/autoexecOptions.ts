export const configGroups = [
  {
    name: "Audio & Performance",
    options: [
      { id: "music", label: "Music (10s Warning only)", cmd: 'snd_deathcamera_volume "0"; snd_mapobjective_volume "0"; snd_menumusic_volume "0"; snd_roundend_volume "0"; snd_roundstart_volume "0"; snd_tensecondwarning_volume "0.05"', desc: "Wycisza wszystko poza bombą (10s)." },
      { id: "fps", label: "Uncapped FPS + UI Limit", cmd: 'fps_max "0"; fps_max_ui "64"', desc: "Max FPS w grze, oszczędność w menu." },
      { id: "network", label: "Pro Network (Rate & Interp)", cmd: 'rate "786432"; cl_interp_ratio "0"', desc: "Najlepsze ustawienia pod stabilne łącze." },
      { id: "latency", label: "Low Latency Sleep", cmd: 'engine_low_latency_sleep_after_client_tick "1"', desc: "Minimalizuje opóźnienia silnika." },
      { id: "predict", label: "Disable FX Prediction", cmd: 'cl_predict_kill_ragdolls "false"; cl_predict_head_shot_fx "false"; cl_predict_body_shot_fx "false"', desc: "Wyłącza przewidywanie efektów dla lepszego feelingu." },
    ]
  },
  {
    name: "Radar & HUD",
    options: [
      { id: "radar_zoom", label: "Pro Radar (More Info)", cmd: 'cl_radar_always_centered "1"; cl_radar_scale "0.3"; cl_radar_icon_scale_min "0.6"; cl_radar_scale_dynamic "true"', desc: "Widzisz więcej mapy na radarze." },
      { id: "clean_hud", label: "Clean HUD", cmd: 'r_show_build_info "false"; cl_hide_avatar_images "2"', desc: "Usuwa zbędne napisy i avatary." },
      { id: "teammates", label: "Teammate Overhead Fade", cmd: 'cl_teamid_overhead_fade_near_crosshair "1"', desc: "Nicki nie zasłaniają przeciwnika." },
    ]
  },
  {
    name: "Binds & Misc",
    options: [
      { id: "jump_scroll", label: "Jump on Scroll", cmd: 'bind "mwheelup" "+jump"; bind "mwheeldown" "+jump"; bind "space" "+jump"', desc: "Skakanie scrollem i spacją." },
      { id: "no_e_buy", label: "Disable E to Buy", cmd: 'cl_use_opens_buy_menu "0"', desc: "E nie otwiera menu zakupów." },
      { id: "mute_focus", label: "Sound on Alt-Tab", cmd: 'snd_mute_losefocus "0"', desc: "Słyszysz grę po zminimalizowaniu." },
    ]
  }
];