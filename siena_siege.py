import datetime


class SienaSiege:
    def __init__(self):
        # Constants from the "Montreal Mouse" Logic
        self.target = "SCC Grade 2 (Moderately Differentiated)"
        self.status = "Post-Surgical / Siege Mode"
        self.fasting_target = 18  # Hours

        # Dashboard Variables
        self.last_meal_time = None
        self.sentinel_visibility = 0  # 0 to 100
        self.fortress_softness = 0  # 0 to 100
        self.zipper_temp_log = []

    def log_meal(self, time_str, bioactives):
        """
        Inputs: '18:15', ['Nigella', 'Sulforaphane', 'Ginger', 'EGCG']
        """
        self.last_meal_time = datetime.datetime.strptime(time_str, "%H:%M")
        # Every bioactive 'unmasks' the cancer or 'softens' the wall
        self.sentinel_visibility = min(100, self.sentinel_visibility + (len(bioactives) * 15))
        if "Ginger" in bioactives:
            self.fortress_softness = min(100, self.fortress_softness + 25)

    def get_siege_status(self, current_time_str):
        if self.last_meal_time is None:
            raise ValueError("No meal logged. Call log_meal() before get_siege_status().")

        now = datetime.datetime.strptime(current_time_str, "%H:%M")

        # If current time appears earlier than meal time, assume next day.
        if now < self.last_meal_time:
            now += datetime.timedelta(days=1)

        fast_duration = (now - self.last_meal_time).total_seconds() / 3600

        if fast_duration >= 18:
            return "⚔️ PHASE: SENTINEL DOMINANCE (NK Cells Hunting)"
        if fast_duration >= 14:
            return "🔥 PHASE: HEALING SWITCH ON (Autophagy Active)"
        return "⏳ PHASE: DIGESTION (System Busy)"


# Initialize the Architect's System
if __name__ == "__main__":
    dashboard = SienaSiege()
    dashboard.log_meal("18:15", ["Nigella", "Sulforaphane", "Ginger", "EGCG", "Olive Oil"])
    print(dashboard.get_siege_status("22:15"))
